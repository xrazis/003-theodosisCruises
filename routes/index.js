var express = require("express"),
  router = express.Router();

router.get("/", function(req, res){
    res.redirect("/index");
});

router.get("/index", function(req, res, next){
    res.render("index");
});

router.get("/bcaves", function(req, res, next){
  res.render("bcaves");
});

router.get("/shipwreck", function(req, res, next){
  res.render("shipwreck");
});

router.get("/cruises", function(req, res, next){
  res.render("cruises");
});

router.get("/photos", function(req, res, next){
  res.render("photos");
});

router.get("/contact", function(req, res, next){
  res.render("contact");
});
module.exports = router;