const express = require("express");
const router = express.Router();

const Company = require("../db/companies");

const app = express();

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
  console.log(req.body);
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

app.delete("/api/jobs/:id", (req, res) => {
  Job.findOneAndRemove({ _id: req.params.id }).then(() => {});
});

app.get("/api/jobs/edit/:id", (req, res) => {
  Job.findOne({ _id: req.params.id }).then({});
});

app.put("/api/jobs/:id", (req, res) => {
  Job.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    {}
  );
});

module.exports = router;
