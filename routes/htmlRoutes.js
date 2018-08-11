// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    app.get("/", function (req, res) {
        if (req.user) {
            res.redirect("/homePageSignedIn");
        }
        res.sendFile(path.join(__dirname, "../public/homePage.html"));
    });

    app.get("/homePageSignedIn", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/homePageSignedIn.html"));
    });

    app.get("/register", function (req, res) {
        // If the user already has an account send them to the members page
        // if (req.user) {
        //     res.redirect("/homePage");
        // }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get("/login", function (req, res) {
        // If the user already has an account send them to the members page
        // if (req.user) {
        //     res.redirect("/homePage");
        // }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    // leaving this here in case I need to use isAuthentiated later
    // app.get("/addNewRecord", isAuthenticated, function (req, res) {

    app.get("/addNewRecord", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/addNewRecord.html"));

    });
    // app.get("/adventureDetails/:id", function (req, res) {

    //     // db.Adventures.findOne({ where: { id: req.params.id } }).then(function (dbAdventure) {
    //     //     console.log("Have i hit this line", dbAdventure);

    //     // });
    //     res.send(req.params.id);
    //     // res.sendFile(path.join(__dirname, "../public/adventureDetails.html"));
    // });

    

    app.get("/adventureDetails/:id", function (req, res) {
        db.Adventures.findOne({ where: { id: req.params.id } }).then(function (dbAdventure) {
            console.log("Have i hit this line", dbAdventure);

            res.render("index", dbAdventure.dataValues);

        });

    });

};

// var db = require("../models");

// module.exports = function(app) {
//   // Load index page
//   app.get("/", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.render("index", {
//         msg: "Welcome!",
//         examples: dbExamples
//       });
//     });
//   });

//   // Load example page and pass in an example by id
//   app.get("/example/:id", function(req, res) {
//     db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.render("example", {
//         example: dbExample
//       });
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };