const mongoose = require("../db/connection");

const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  description: String,
  location: String,
  salary: String,
  status: String
});

const Job = mongoose.model("Company", JobSchema);

module.exports = Job;
