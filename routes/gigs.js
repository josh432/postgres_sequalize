const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");

// Get gig list

router.get("/", (req, res) =>
  Gig.findAll()
    .then(gigs => {
      res.render("gigs", {
        gigs
      });
    })
    .catch(err => console.log(err))
);

// Add a gig
router.get("/add", (req, res) => {
  const data = {
    title: "Looking for a Wordpress Developer",
    technologies: "php, javascript, html, css",
    budget: "$1000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis posuere turpis. Curabitur vitae nisi lorem. Nam semper efficitur elit, condimentum egestas velit sodales non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique porta sollicitudin.",
    contact_email: "user1@gmail.com"
  };
  let { title, technologies, budget, description, contact_email } = data;

  // Insert into table
  Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email
  })
    .then(gig => res.redirect("/gigs"))
    .catch(err => console.log(err));
});

module.exports = router;
