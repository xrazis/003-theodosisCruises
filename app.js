var bodyParser = require("body-parser"),
  express = require("express"),
  app = express(),
  i18next = require("i18next"),
  flash = require("connect-flash"),
  i18nextMiddleware = require("i18next-express-middleware"),
  FilesystemBackend = require("i18next-node-fs-backend"),
  expressSanitizer = require("express-sanitizer"),
  session = require('express-session');

var indexRoute = require("./routes/index");
var enTranslations = require("./locales/en.json");
var elTranslations = require("./locales/el.json");
var ruTranslations = require("./locales/ru.json");
var jaTranslations = require("./locales/ja.json");

const creds = require("../config/cred");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(expressSanitizer());
app.use(flash());

i18next
  .use(i18nextMiddleware.LanguageDetector)
  .use(FilesystemBackend)
  .init({
    detection: {
      order: ["querystring", "cookie"],
      caches: ["cookie"]
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

app.use(
  session({
    cookie: {
      maxAge: 60000
    },
    secret: creds.secret,
    resave: false,
    saveUninitialized: false
  })
);

app.use(i18nextMiddleware.handle(i18next));
app.use("/", indexRoute);

//  live - plesk
// const http = require("http");
// http.createServer(app).listen(process.env.PORT);

//  local
app.listen(3000, "127.0.0.1");
console.log("SERVER IS RUNNING!");