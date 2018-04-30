const Job = require('../models/Job');
const chalk = require('chalk');

module.exports = () => {
  const jobs = [
    {
      title: 'Job 1',
      description: 'Description about job 1',
      category: 'ENGR',
      contact_emails: ['abc@gmail.com'],
      contact_numbers: ['9999999999']
    },
    {
      title: 'Job 2',
      description: 'Description about job 2',
      category: 'MARKT',
      contact_emails: ['def@gmail.com'],
      contact_numbers: ['8888888888']
    },
    {
      title: 'Job 3',
      description: 'Description about job 3',
      category: 'TEACH',
      contact_emails: ['ghi@gmail.com'],
      contact_numbers: ['7777777777']
    },
    {
      title: 'Job 4',
      description: 'Description about job 4',
      category: 'IT',
      contact_emails: ['lmn@gmail.com'],
      contact_numbers: ['9999999999']
    },
    {
      title: 'Job 5',
      description: 'Description about job 5',
      category: 'FINACC',
      contact_emails: ['opq@gmail.com'],
      contact_numbers: ['8888888888']
    },
    {
      title: 'Job 6',
      description: 'Description about job 6',
      category: 'BD',
      contact_emails: ['rst@gmail.com'],
      contact_numbers: ['7777777777']
    },
    {
      title: 'Job 7',
      description: 'Description about job 7',
      category: 'BANK',
      contact_emails: ['uvw@gmail.com'],
      contact_numbers: ['9999999999']
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
