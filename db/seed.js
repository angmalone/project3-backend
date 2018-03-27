const mongoose = require("./jobs.js");
const Job = mongoose.model("Job");
const jobData = require("./jobs.json");

Job.remove({})
  .then(() => {
    return Job.collection.insert(jobData);
  })
  .then(() => {
    process.exit();
  });
