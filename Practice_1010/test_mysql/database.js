// initialising mysql package manager and put into a variable
const mysql = require("mysql2"); // mysql property from package.json (?)

// boilerplate to make a connection
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "testUser",
  password: "secretword",
  database: "testdb",
});

// connect to mysql
connection.connect();

// make a query
// error, results, fields are not keywords but variables, names can be any
connection.query(`select * from tasks`, (error, results, fields) => {
  if (error) return console.log(error);
  return console.log(results);
});

// close connection
connection.end();
