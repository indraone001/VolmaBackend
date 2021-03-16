// Update with your config settings.

module.exports = {

    development: {
      client: 'mysql',
      connection: {
        host: 'localhost',
        port: '3306',
        database: 'tokobuku',
        user: 'root',
        password: '',
        charset: 'utf8'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: __dirname + '/knex/migrations',
      },
      seeds: {
        directory: __dirname + '/knex/seeds'
      }
    }
  
  };