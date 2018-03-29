const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const methodOverride = require("method-override");
const Job = require("./db/jobs.js");
const Company = require("./db/companies.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cors());

app.get("/api/jobs", (req, res) => {
  Job.find()
    .then(jobs => {
      res.json(jobs);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/api/companies", (req, res) => {
  Company.find()
    .then(companies => {
      res.json(companies);
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

app.post("/api/companies", (req, res) => {
  Company.create(req.body)
    .then(companies => {
      res.json(companies);
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

app.get("/api/companies/:id", (req, res) => {
  Company.findById(req.params.id)
    .then(companies => {
      res.json(companies);
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete("/api/jobs/:id", (req, res) => {
  Job.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/");
  });
});

app.delete("/api/companies/:id", (req, res) => {
  Company.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/");
  });
});

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT ${app.get("port")} POPPIN OFF 🌟`);
});
