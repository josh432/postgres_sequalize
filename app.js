const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const Sequelize = require("sequelize");

// Option 1: Passing parameters separately
const db = new Sequelize("codegig", "postgres", "abc123", {
  host: "localhost",
  dialect: "postgres"
});

//Test DB
db.authenticate()
  .then(() => console.log("Database Connected..."))
  .catch(err => console.log("error: " + err));

const app = express();
app.get("/", (req, res) => res.send("INDEX"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
