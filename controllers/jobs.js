const express = require("express");
const router = express.Router();
const Job = require("../db/jobs");

router.get("/", (req, res) => {
  Job.find({})
    .then(jobs => {
      res.json(jobs);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  Job.create(req.body)
    .then(jobs => {
      res.json(jobs);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  Job.findById(req.params.id)
    .then(jobs => {
      res.json(jobs);
    })
    .catch(err => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  Job.findOneAndRemove({ _id: req.params.id }).then(() => {});
});

router.get("/edit/:id", (req, res) => {
  Job.findOne({ _id: req.params.id }).then({});
});

router.put("/:id", (req, res) => {
  Job.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    {}
  );
});

module.exports = router;
