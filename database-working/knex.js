
var options = {
    development: {
        client: 'pg',
        connection: {
        host: "localhost",
        user:"postgres",
        password:"postgres",
        database: "postgres",
        port: 5432
        }

      },
  };
  
  var environment = process.env.NODE_ENV || 'development';
  var config = options[environment];
  module.exports = require('knex')(config);