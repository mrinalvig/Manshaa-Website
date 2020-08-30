const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'coolmkov',
  database: 'products',
});

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to DB');
  }
});

module.exports = connection;