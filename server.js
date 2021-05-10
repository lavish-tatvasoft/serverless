const sls = require('serverless-http')
const app = require('./App/app')
module.exports.run = sls(app)