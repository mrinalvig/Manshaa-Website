const express = require("express");
const db = require('../db/index.js');
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const { privateEncrypt } = require("crypto");
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

app.get('/bridesMaides', (req, res) => {
    db.query(`SELECT * FROM women WHERE category='bridesmaids'`, (err, result) => {
        if(err) {
            res.status(405).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.get('/suits', (req, res) => {
    db.query(`SELECT * FROM women WHERE category='suits'`, (err, result) => {
        if(err) {
            res.status(405).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.get('/lehenga', (req, res) => {
    db.query(`SELECT * FROM women WHERE category='lahenga'`, (err, result) => {
        if(err) {
            res.status(405).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.get('/earings', (req, res) => {
    db.query(`SELECT * FROM jewelry WHERE category='earings'`, (err, result) => {
        if(err) {
            res.status(405).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.get('/rings', (req, res) => {
    db.query(`SELECT * FROM jewelry WHERE category='rings'`, (err, result) => {
        if(err) {
            res.status(405).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.delete('/womenCat', (req, res) => {
    db.query(`DELETE From women`, (err, result) => {
        if(err) {
            res.status(405).send(err);
        } else {
            res.status(205).send(result);
        }
    })
})

app.delete('/menCat', (req, res) => {
    db.query(`DELETE From men`, (err, result) => {
        if(err) {
            res.status(405).send(err);
        } else {
            res.status(205).send(result);
        }
    })
})

app.delete('/jewelryCat', (req, res) => {
    db.query(`DELETE From jewelry`, (err, result) => {
        if(err) {
            res.status(405).send(err);
        } else {
            res.status(205).send(result);
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

app.delete('/suits', (req, res) => {
    db.query(`DELETE FROM women WHERE category='suits'`, (err, result) => {
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

app.get('/necklace', (req, res) => {
    db.query(`SELECT * FROM jewelry WHERE category='necklace'`, (err, result) => {
        if(err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.get('/bangles', (req, res) => {
    db.query(`SELECT * FROM jewelry WHERE category='bangles'`, (err, result) => {
        if(err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.get('/chokers', (req, res) => {
    db.query(`SELECT * FROM jewelry WHERE category='chokers'`, (err, result) => {
        if(err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.get('/mathas', (req, res) => {
    db.query(`SELECT * FROM jewelry WHERE category='matha'`, (err, result) => {
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

app.post('/loggedIn', (req, res) => {
    db.query(`SELECT * FROM user WHERE username = '${req.body.username}'`, (err, result) => {
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

app.put('/purchased', (req, res) => {
    db.query(`UPDATE user SET purchased = '${req.body.purchased}' WHERE username = "${req.body.username}";`, (err, result) => {
        if(err) {
            res.status(403).send(err);
        } else{
            res.status(202).send('Purchase Made');
        }
    })
})

app.post('/getPurchases', (req, res) => {
    db.query(`SELECT purchased FROM user WHERE username = "${req.body.username}";`, (err, result) => {
        if(err) {
            res.status(403).send(err);
        } else{
            res.status(202).send(result);
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

app.put('/cartEmpty', (req, res) => {
    db.query(`UPDATE user SET cart = "[]" WHERE username = "${req.body.username}"`, (err, result) => {
        if(err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.get('/gharara', (req, res) => {
    db.query(`SELECT * FROM women WHERE category = "ghararas"`, (err, result) => {
        if(err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})

app.post("/checkout", async (req, res) => {
    console.log("Request:", req.body);

    let error;
    let status;
    try {
      const { product, token } = req.body;

      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });

      const idempotency_key = uuidv4();
      const charge = await stripe.charges.create(
        {
          amount: product.price,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotency_key
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }

    res.json({ error, status });
  });

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
