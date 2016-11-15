const devEnv = require('./env/dev')
const prodEnv = require('./env/prod')


module.exports = (env) => {
  return env === 'prod' ? prodEnv : devEnv;
}