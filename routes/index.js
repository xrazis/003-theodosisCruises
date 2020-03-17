var express = require("express"),
  router = express.Router();

router.get("/", function(req, res){
    res.redirect("/index");
});

router.get("/index", function(req, res, next){
    res.render("index");
});

router.get("/booking", function(req, res, next){
  res.render("booking");
});

module.exports = router;