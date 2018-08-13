const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/employees';

mongoose.Promise = global.Promise;
// Create the database connection
mongoose.connect(dbURI);

// Mongoose connection to MongoDB
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
  logger.error('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  logger.info('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    logger.info('Mongoose default connection disconnected through app termination');
  });
});