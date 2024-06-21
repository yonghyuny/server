const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwer1234",
  database: "reactspring",
});

connection.connect();

connection.query(
  `INSERT INTO COFFEE(id, name, price, kcal) VALUES(5, "모카푸라푸치노", 4000, 300);`
);
connection.end();
