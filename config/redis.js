'use strict'

/*
|--------------------------------------------------------------------------
| Redis Configuaration
|--------------------------------------------------------------------------
|
| Here we define the configuration for redis server. A single application
| can make use of multiple redis connections using the redis provider.
|
*/

const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | connection
  |--------------------------------------------------------------------------
  |
  | Redis connection to be used by default.
  |
  */
  connection: Env.get('REDIS_CONNECTION', 'local'),

  /*
  |--------------------------------------------------------------------------
  | local connection config
  |--------------------------------------------------------------------------
  |
  | Configuration for a named connection.
  |
  */
  local: {
    host: Env.get('REDIS_HOST', 'local'),
    user: Env.get('REDIS_USER', 'local'),
    port: Env.get('REDIS_PORT', 18179),
    password: Env.get('REDIS_PASSWORD', ''),
    // db: 0,
    keyPrefix: Env.get('REDIS_KEY_PREFIX', '')
  }
}
