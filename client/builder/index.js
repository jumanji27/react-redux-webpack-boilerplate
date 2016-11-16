const devEnv = require('./env/dev')
const prodEnv = require('./env/prod')


const getEnv = () => {
  return process.env.NODE_ENV === 'production' ? prodEnv : devEnv;
}


module.exports = getEnv()