var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_mysql_crud",
});
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected..! To the Database");
  }
});

module.exports = connection;
