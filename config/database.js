// Option 1: Passing parameters separately
const Sequelize = require("sequelize");
module.exports = new Sequelize("codegig", "postgres", "abc123", {
  host: "localhost",
  dialect: "postgres"
});
