// Migration Settings
// Update with your config settings.

module.exports = {
  
  development: {
    client: 'mysql',
    connection: {
      host: 'db4free.net',
      port: '3306',
      database: 'volma01',
      user: 'volma01',
      password: 'volmadb4free'
    },
    pool: {
      min: 2,
      max: 6,
      createTimeoutMillis: 3000,
      acquireTimeoutMillis: 30000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 100,
      propagateCreateError: false // <- default is true, set to false
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }

};