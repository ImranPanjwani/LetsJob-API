/**
 * Module dependencies
 */
const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const chalk = require('chalk');

/**
 * Load environment variables from .env files ( API keys and passwords)
 */
dotenv.load({path: '.env'});

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
 * Start express server
 */
app.listen(app.get('port'), () => {
    console.log('%s App is running on http://localhost:%d in %s mode.', chalk.green('\u2713'), app.get('port'), app.get('env'));
})
