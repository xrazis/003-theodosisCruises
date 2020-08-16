var express = require("express"),
  nodemailer = require("nodemailer"),
  router = express.Router({
    mergeParams: true
  });

const creds = require("../config/cred");

var transport = {
  host: "linux85.papaki.gr",
  auth: {
    user: creds.user,
    pass: creds.pass
  }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Nodemailer is running...");
  }
});

router.get("/", function (req, res) {
  res.redirect("/index");
});

router.get("/index", function (req, res, next) {
  res.render("index");
});

router.get("/booking", function (req, res, next) {
  res.render("booking");
});

router.get("/cruises", function (req, res, next) {
  res.render("cruises");
});

router.get("/photos", function (req, res, next) {
  res.render("photos");
});

router.post("/contact", function (req, res) {
  var email = req.body.email;
  var name = req.body.name;
  var message = req.body.message;

  var mail = {
    from: email,
    to: "info@theodosiscruises.gr",
    subject: name,
    text: message
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      req.flash("success", "Successfully sent email!");
      res.redirect("contact");
    }
  });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", {
    success: req.flash('success'),
    apiKey: creds.apikey
  });
});

module.exports = router;