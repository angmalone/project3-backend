const express = require("express");
const router = express.Router();

const Company = require("../db/companies");

const app = express();

app.get("/api/companies", (req, res) => {
  Company.find()
    .then(companies => {
      res.json(companies);
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

app.get("/api/companies/:id", (req, res) => {
  Company.findById(req.params.id)
    .then(companies => {
      res.json(companies);
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete("/api/companies/:id", (req, res) => {
  Company.findOneAndRemove({ _id: req.params.id }).then(() => {});
});

app.get("/api/companies/edit/:id", (req, res) => {
  Company.findOne({ _id: req.params.id }).then({});
});

app.put("/api/companies/:id", (req, res) => {
  Company.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(company => res.json(company));
});

module.exports = router;
