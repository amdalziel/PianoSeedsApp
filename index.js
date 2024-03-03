// Importing necessary modules for file system operations and path manipulation
const path = require("path");
const fs = require("fs");

// Importing Express and body-parser middleware
const express = require("express");
const bodyParser = require("body-parser");

// Creating an instance of express
const app = express();


// Body Parser Middleware
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Setting the port number
const port = 3000;

// Setting the DEBUG flag
global.DEBUG = true;

// Setting the view engine and views directory to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "views"));

// Serving static files from the public directory
app.use(express.static("public"));
app.use(express.json());

// Route for the root URL
app.get("/", (req, res) => {
  if (DEBUG) console.log("Route: home");
  res.render("index.ejs");
});

app.get("/home", (req, res) => {
    if (DEBUG) console.log("Route: home");
    res.render("index.ejs");
  });

app.get("/about", (req, res) => {
    if (DEBUG) console.log("Route: about");
    res.render("about.ejs");
  });

  app.get("/blog", (req, res) => {
    if (DEBUG) console.log("Route: home");
    res.render("blog.ejs");
  });

  app.get("/contact", (req, res) => {
    if (DEBUG) console.log("Route: home");
    res.render("contact.ejs");
  });

  app.get("/curricula", (req, res) => {
    if (DEBUG) console.log("Route: home");
    res.render("curricula.ejs");
  });

  app.get("/musictheoryinsideout", (req, res) => {
    if (DEBUG) console.log("Route: home");
    res.render("musictheoryinsideout.ejs");
  });


// Route for handling 404 errors
app.use((request, response) => {
  response.status(404).write("404: Content not found");
  response.end();
});

// Staring the server and listening on port 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});