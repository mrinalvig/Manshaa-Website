const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "lyn7gfxo996yjjco.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "puvzm5ehbms7rodf",
  password: "qu4u8n2qv14j8tha",
  database: "a42p83urh1kg0hxn",
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