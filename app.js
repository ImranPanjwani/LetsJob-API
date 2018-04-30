/**
 * Module dependencies
 */
const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const chalk = require('chalk');
const mongoose = require('mongoose');

/**
 * Load environment variables from .env files ( API keys and passwords)
 */
dotenv.load({path: '.env'}); 

/**
 * Controllers ( Route handlers )
 */
const jobController = require('./controllers/job');

const dbServer  = process.env.DB_ENV || 'primary';
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
    console.log('%s MongoDB connection error. Please make sure mongodb is running.', chalk.red('\u2718'));
    process.exit();
});
/**
 * Handle successful connection
 */
mongoose.connection.on('connected', (ref) => {

    console.log('%s MongoDB - Connected to %s DB !!', chalk.green('\u2713'), dbServer);
    require('./util/seedData')();
    /**
     * Create Express App
     */
    const app = express();

    /**
     * Express configuration
     */
    app.set('port', process.env.PORT || 3000);
    app.use(logger('dev')); 

    /**
     * Basic app routes
     */
    app.get('/jobs', jobController.getJobs);

    /**
     * Start express server
     */
    app.listen(app.get('port'), () => {
        console.log('%s App is running on http://localhost:%d in %s mode.', chalk.green('\u2713'), app.get('port'), app.get('env'));
    })
});
