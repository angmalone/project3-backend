const mongoose = require("../db/connection");

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  contactInfo: {
    type: String,
    required: true
  },
  contactName: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

//https://stackoverflow.com/questions/19762430/make-all-fields-required-in-mongoose
//var required = ['name', 'type', 'contactInfo', 'contactName', 'status']
//for (attr in required) { schema[attr].required = true; }

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
