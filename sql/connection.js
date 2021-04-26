//import SQL
const mysql = require('mysql'); 

//create connection to mysql database and initialize into pool variable to call later 
let pool = mysql.createPool({
  host: 'den1.mysql1.gear.host',
  user: 'jmdb11',
  password: 'Pi45wfTS4U!?',
  database:'jmdb11',
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
