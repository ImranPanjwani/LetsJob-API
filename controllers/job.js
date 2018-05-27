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
    .catch((err) => {
      res.send(err);
    });
};

/** Sample json data,* {
        "contact_emails": [
            "ghi@gmail.com"
        ],
        "contact_numbers": [
            7777777777
        ],
        "title": "Job 3",
        "description": "Description about job 3",
        "category": "TEACH",
    }

*/
// exports.postJob = (req, res) => {  };
