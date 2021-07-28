//import SQL
require('dotenv').config(); 
const mysql= require('mysql'); 

//create connection to mysql database and initialize into pool variable to call later 
let pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DEFAULT_SCHEMA,
  connectionLimit: 200
})

pool.getConnection(function(err, connection) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = pool; 
