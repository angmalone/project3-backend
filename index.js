const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
