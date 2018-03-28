const Job = require("./jobs");
const jobData = require("./jobs.json");
const Company = require("./companies");
const companyData = require("./companies.json");

Job.remove({})
  .then(() => {
    return Job.collection.insert(jobData);
  })
  .then(() => {
    process.exit();
  });

Company.remove({})
  .then(() => {
    return Company.collection.insert(companyData);
  })
  .then(() => {
    process.exit();
  });
