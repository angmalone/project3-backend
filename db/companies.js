const mongoose = require("../db/connection");

const CompanySchema = new mongoose.Schema({
  name: String,
  type: String,
  contactInfo: String,
  contactName: String,
  status: String
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
