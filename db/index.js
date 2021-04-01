const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "lyn7gfxo996yjjco.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "qp5i1cidoebadl7h",
  password: "a4syn5cg3mo7ytp9",
  database: "s2n6jva7nr1t2wlu",
});

connection.connect((err) => {
  if (err) {
    console.error(err);
    console.log('uh-oh');
  } else {
    console.log('Connected to DB');
  }
});

module.exports = connection;