const mongoose = require("../db/connection");

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
