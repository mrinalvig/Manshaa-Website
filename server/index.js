const express = require("express");
const db = require('../db/index.js');
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const stripe = require("stripe")("sk_test_51HsJ7VDg5ZnilIdliqnch6RiA1hZp7gxVDeovnpX04TwABhpQuPa5uQ9Zhi4Bmg44OzOIBPicdc5Hvx0WmT8UTBW00bOI9pPHL");
// const cors = require('cors');
//const db = require("../db/index.js");

const port = 3000;

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get('/men', (req, res) => {
    db.query(`SELECT * FROM men`, (err, result) => {
        if(err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(result);
        }
    })
});

app.get('/women', (req, res) => {
    db.query(`SELECT * FROM women`, (err, result) => {
        if(err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.get('/bridal', (req, res) => {
    db.query(`SELECT * FROM women WHERE category='bridal'`, (err, result) => {
        if(err) {
            res.status(405).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.delete('/bridal', (req, res) => {
    db.query(`DELETE FROM women WHERE category='bridal'`, (err, result) => {
        if(err) {
            res.status(405).send(err);
        } else {
            res.status(205).send(result);
        }
    })
})

app.get('/jewelry', (req, res) => {
    db.query(`SELECT * FROM jewelry`, (err, result) => {
        if(err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.get('/userId', (req, res) => {
    db.query('SELECT * FROM user', (err, result) => {
        if(err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.get('/loggedUser', (req, res) => {
    db.query(`SELECT * FROM user WHERE logged = "yes"`, (err, result) => {
        if(err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.post('/userId', (req, res) => {
    db.query(`INSERT INTO user(username, password, logged) VALUES ("${req.body.username}", "${req.body.password}", "${req.body.logged}")`, (err, result) => {
        if(err) {
            res.status(402).send(err);
        } else{
            res.status(202).send('ID Posted');
        }

    })
})

app.put('/userId', (req, res) => {
    db.query(`UPDATE user SET logged = "${req.body.logged}" WHERE username = "${req.body.username}";`, (err, result) => {
        if(err) {
            res.status(403).send(err);
        } else{
            res.status(202).send('ID Changed');
        }
    })
})

app.put('/logOut', (req, res) => {
    db.query(`UPDATE user SET logged = "no" WHERE logged = "yes";`, (err, result) => {
        if(err) {
            res.status(403).send(err);
        } else{
            res.status(202).send('ID Changed');
        }
    })
})

app.put('/cart', (req, res) => {
    db.query(`UPDATE user SET cart = '${req.body.cart}' WHERE username = "${req.body.username}";`, (err, result) => {
        if(err) {
            res.status(403).send(err);
        } else{
            res.status(202).send('Cart Changed');
        }
    })
})

app.get('/logged', (req, res) => {
    db.query(`SELECT username FROM user WHERE logged = "yes"`, (err, result) => {
        if(err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.put('/emptyCart', (req, res) => {
    db.query(`UPDATE user SET cart = "" WHERE logged = "yes"`, (err, result) => {
        if(err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.post('/purchase', (req, res) => {
    const paymentIntent = stripe.paymentIntent.create({
        amount: req.body.amount,
        currency: 'usd',
        metadata: {integration_check: 'accept_a_payment'},
        recepient_email: req.body.email
    })
    res.json({'client_secret': paymentIntent['client_secret']})
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
