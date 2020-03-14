var bodyParser = require("body-parser"),
  express = require("express"),
  app = express(),
  expressSanitizer = require("express-sanitizer");

var indexRoute = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(expressSanitizer());

app.use("/", indexRoute);

// error handlers

// development error handler
// will print stacktrace
// if (app.get("env") === "development") {
//   app.use(function (err, req, res, next) {
//     res.status(err.status || 500);
//     res.render("error", {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function (err, req, res, next) {
//   res.status(err.status || 500);
//   res.render("error", {
//     message: err.message,
//     error: {}
//   });
// });

//  live - plesk
// const http = require("http");
// http.createServer(app).listen(process.env.PORT);

//  local
app.listen(3000, "127.0.0.1");
console.log("SERVER IS RUNNING!");
