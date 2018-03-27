const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const methodOverride = require("method-override");
const Job = require("./db/jobs.js");
const Company = require("./db/companies.js");

const app = express();
//app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/api/jobs", (req, res) => {
  Job.find()
    .then(jobs => {
      res.json(jobs);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/api/jobs", (req, res) => {
  Job.create(req.body)
    .then(jobs => {
      res.json(jobs);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/api/jobs/:id", (req, res) => {
  Job.findById(req.params.id)
    .then(jobs => {
      res.json(jobs);
    })
    .catch(err => {
      console.log(err);
    });
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT ${app.get("port")} POPPIN OFF 🌟`);
});
