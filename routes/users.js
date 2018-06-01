var express = require('express');
var router = express.Router();

//Deal with database here

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json([
        {id:1, username:"yuki"},
        {id:2, username:"dave"},
    ])
});

router.get('/yuki', function(req, res, next) {
    res.json([
        {id:3, username:"mama"},
        {id:4, username:"papa"},
    ])
});

module.exports = router;

//Example code of connecting to mysql
//!!might need to do npm install mysql first
//For more database, reference https://expressjs.com/en/guide/database-integration.html#mysql
/*
  var mysql = require('mysql')
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dbuser',
  password : 's3kreee7',
  database : 'my_db'
  });

  connection.connect()

  connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
  })

  connection.end()
  */
