const express = require("express");
const router = express.Router();
const Company = require("../db/companies");

router.get("/", (req, res) => {
  Company.find()
    .then(companies => {
      res.json(companies);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  Company.create(req.body)
    .then(companies => {
      res.json(companies);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  Company.findById(req.params.id)
    .then(companies => {
      res.json(companies);
    })
    .catch(err => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  Company.findOneAndRemove({ _id: req.params.id }).then(() => {});
});

router.get("/edit/:id", (req, res) => {
  Company.findOne({ _id: req.params.id }).then({});
});

router.put("/:id", (req, res) => {
  Company.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(company => res.json(company));
});

module.exports = router;
