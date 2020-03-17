var bodyParser = require("body-parser"),
  express = require("express"),
  app = express(),
  i18next = require("i18next"),
  i18nextMiddleware = require("i18next-express-middleware"),
  FilesystemBackend = require('i18next-node-fs-backend'),
  expressSanitizer = require("express-sanitizer");

var indexRoute = require("./routes/index");
var enTranslations = require("./locales/en.json");
var elTranslations = require("./locales/el.json");
var ruTranslations = require("./locales/ru.json");
var jaTranslations = require("./locales/ja.json");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(expressSanitizer());

i18next
    .use(i18nextMiddleware.LanguageDetector)
    .use(FilesystemBackend)
    .init({
      detection: {
        order: ['querystring', 'cookie'],
        caches: ['cookie']
      },
        preload: ["en", "el", "ru", "ja"],
        fallbackLng: "en",
        debug: false,
        resources: {
            en: enTranslations,
            el: elTranslations,
            ru: ruTranslations,
            ja: jaTranslations
        },
        saveMissing: true
    });

app.use(i18nextMiddleware.handle(i18next));
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