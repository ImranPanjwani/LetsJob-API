/**
 * Module dependencies
 */
const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const chalk = require('chalk');
const mongoose = require('mongoose');
const cors = require('cors');
const seedData = require('./util/seedData');

const router = express.Router();

/**
 * Load environment variables from .env files ( API keys and passwords)
 */
dotenv.load({ path: '.env' });

/**
 * Controllers ( Route handlers )
 */
const jobController = require('./controllers/job');

const dbServer = process.env.DB_ENV || 'primary';
/**
 * Connect to MongoDB
 */
// Using global Promise
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

/**
 * Handle connection error
 */
mongoose.connection.on('error', (err) => {
  console.log(err);
  console.log('%s MongoDB connection error. Please make sure mongodb is running.',
    chalk.red('\u2718'));
  process.exit();
});
/**
 * Handle successful connection
 */
mongoose.connection.on('connected', () => {
  console.log('%s MongoDB - Connected to %s DB !!', chalk.green('\u2713'), dbServer);
  seedData();
  /**
   * Create Express App
   */
  const app = express();

  /**
   * Express configuration
   */
  app.set('port', process.env.PORT || 3000);
  app.use(logger('dev'));
  app.use(cors());

  /**
   * Basic app routes
   */
  router.get('/jobs', jobController.getJobs);
  // router.post('/job', jobController.postJob);

  app.use('/api', router);
  /**
   * Start express server
   */
  app.listen(app.get('port'), () => {
    console.log('%s App is running on http://localhost:%d in %s mode.',
      chalk.green('\u2713'),
      app.get('port'),
      app.get('env'));
  });
});
