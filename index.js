const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const methodOverride = require("method-override");
const Job = require("./db/jobs.js");
const Company = require("./db/companies.js");

const app = express();
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cors());

const jobController = require("./controllers/jobs");
const companyController = require("./controllers/companies");

app.use("/api/jobs", jobController);
app.use("/api/companies", companyController);

app.get("/api", (req, res) => {
  res.send("connected");
});

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT ${app.get("port")} POPPIN OFF 🌟`);
});
