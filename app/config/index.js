const config = {
  host: process.env.EVENT_HOST,
  port: process.env.EVENT_PORT || 9093,
  authentication: process.env.EVENT_AUTHENTICATION || 'connectionString',
  connectionString: process.env.EVENT_CONNECTION_STRING,
  username: process.env.EVENT_USERNAME,
  password: process.env.EVENT_PASSWORD,
  mechanism: process.env.EVENT_MECHANISM
}

module.exports = config
