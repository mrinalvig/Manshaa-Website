const express = require("express");
const db = require('../db/index.js');
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
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

app.get('/jewelry', (req, res) => {
    db.query(`SELECT * FROM jewelry`, (err, result) => {
        if(err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(result);
        }
    })
})
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
