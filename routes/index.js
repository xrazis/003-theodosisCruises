var express = require("express"),
  nodemailer = require("nodemailer"),
  router = express.Router();

const creds = require('../config/cred');

var transport = {
  host: 'linux85.papaki.gr',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.get("/", function (req, res) {
  res.redirect("/index");
});

router.get("/index", function (req, res, next) {
  res.render("index");
});

router.get("/bcaves", function (req, res, next) {
  res.render("bcaves");
});

router.get("/shipwreck", function (req, res, next) {
  res.render("shipwreck");
});

router.get("/cruises", function (req, res, next) {
  res.render("cruises");
});

router.get("/photos", function (req, res, next) {
  res.render("photos");
});

router.get("/contact", function (req, res, next) {
  res.render("contact");
});

router.post("/contact", function (req, res) {
  var email = req.body.email;
  var name = req.body.name;
  var message = req.body.message;

  var mail = {
    from: email,
    to: 'info@xrazis.com', //Change to email address that you want to receive messages on
    subject: name,
    text: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);

    } else {
      res.redirect("contact");
    }
  })
});

module.exports = router;