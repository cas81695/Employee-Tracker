const mysql = require("mysql");


const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "C@s81695",
	database: "employees_trackerDB",
});

connection.connect(function(err) {
	if (err) throw err;
});


module.exports = connection;
