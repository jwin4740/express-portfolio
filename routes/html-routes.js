// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.


    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

       app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });

       app.get("/portfolio", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/portfolio.html"));
    });

       app.get("/resume", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/resume.html"));
    });


    app.use(function (req, res, next) {
        res.status(404).send("<div style='text-align: center;'><h1> 404 Error</h1><h3> The page you requested can't be found </h3><h4> return to minervaChess</h4></div>");
    })
};



/*
// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/blog.html"));
  });

  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/cms.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/blog.html"));
  });

};

*/