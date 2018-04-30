const Job = require('../models/Job');

/**
 * GET /jobs
 * Get list of all the jobs
 */
exports.getJobs = (req, res) => {
  Job.find({})
    .then((results) => {
      res.send(results);
    })
    .catch(err => {
      res.send(err);
    });
};
