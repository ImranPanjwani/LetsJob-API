const Job = require('../models/Job');
const chalk = require('chalk');

module.exports = () => {
  const jobs = [
    {
      title: 'Job 1',
      description: 'Description about job 1',
      category: 'ENGR',
      contactEmails: ['abc@gmail.com'],
      contactNumbers: ['9999999999'],
      experience: [2, 4],
      location: ['Hyderabad', 'Pune'],
      salary: {
        salaryRange: [200000],
        salaryType: 'pa'
      },
      role: 'Senior Engineer'
    },
    {
      title: 'Job 2',
      description: 'Description about job 2',
      category: 'MARKT',
      contactEmails: ['def@gmail.com'],
      contactNumbers: ['8888888888'],
      experience: [1],
      location: [],
      salary: {
        salaryRange: [200000, 350000],
        salaryType: 'pa'
      },
      role: 'Business Development Manager'
    },
    {
      title: 'A very very very long title for Job 3 to test the view in app',
      description: 'Some test description about job 3 that might not be much interesting but will help the developer',
      category: 'TEACH',
      contactEmails: ['ghi@gmail.com'],
      contactNumbers: ['7777777777'],
      experience: [0],
      location: ['Mumbai', 'Ahmedabad'],
      salary: {
        salaryRange: [10000, 15000],
        salaryType: 'pm'
      },
      role: null
    },
    {
      title: 'Job 4',
      description: 'Description about job 4',
      category: 'IT',
      contactEmails: ['lmn@gmail.com'],
      contactNumbers: ['9999999999'],
      experience: [0, 3],
      location: ['Jaipur', 'Chennai'],
      salary: {
        salaryRange: [400000, 800000],
        salaryType: 'pa'
      },
      role: 'Software Developer'
    },
    {
      title: 'Job 5',
      description: 'Description about job 5',
      category: 'FINACC',
      contactEmails: ['opq@gmail.com'],
      contactNumbers: ['8888888888'],
      experience: [2, 5],
      location: ['Delhi', 'Hyderabad'],
      salary: {
        salaryRange: [12000, 18000],
        salaryType: 'pm'
      },
      role: 'Accountant'
    },
    {
      title: 'Job 6',
      description: 'Description about job 6',
      category: 'BD',
      contactEmails: ['rst@gmail.com'],
      contactNumbers: ['7777777777'],
      experience: [],
      location: ['Mumbai', 'Hyderabad'],
      salary: {
        salaryRange: [120000, 250000],
        salaryType: 'pa'
      },
      role: null
    },
    {
      title: 'Job 7',
      description: 'Description about job 7',
      category: 'BANK',
      contactEmails: ['uvw@gmail.com'],
      contactNumbers: ['9999999999'],
      experience: [1, 3],
      location: ['Hyderabad', 'Nasik'],
      salary: {
        salaryRange: [20000, 25000],
        salaryType: 'pm'
      },
      role: 'Banker'
    }
  ];
  Job.find({}).then((totalResults) => {
    if (totalResults.length === 0) {
      Job.create(jobs, (err, results) => {
        if (err) {
          console.log(err);
          console.log('%s Error while seeding data.', chalk.red('\u2718'));
          return;
        }
        console.log('%s Data seeding completed. Seeded %d jobs.',
          chalk.green('\u2713'),
          results.length);
      });
      return;
    }
    console.log('%s No seeding required. DB contains %d jobs.',
      chalk.green('\u2713'),
      totalResults.length);
  });
};
