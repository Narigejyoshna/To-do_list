const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todoapp"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

// GET tasks (with category filter)
app.get("/tasks", (req, res) => {
  const category = req.query.category;

  let sql = "SELECT * FROM tasks";
  let params = [];

  if (category && category !== "All") {
    sql += " WHERE category = ?";
    params.push(category);
  }

  db.query(sql, params, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// POST task
app.post("/tasks", (req, res) => {
  const { category, title, description } = req.body;

  const sql = "INSERT INTO tasks (category, title, description) VALUES (?, ?, ?)";
  db.query(sql, [category, title, description], err => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Task added" });
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
