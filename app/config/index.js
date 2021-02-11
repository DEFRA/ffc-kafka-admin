const config = {
  host: process.env.EVENT_HOST,
  port: process.env.EVENT_PORT,
  authentication: process.env.EVENT_AUTHENTICATION,
  username: process.env.EVENT_USERNAME,
  password: process.env.EVENT_PASSWORD,
  mechanism: process.env.EVENT_MECHANISM,
  topic: process.env.CLAIM_UPDATE_TOPIC,
  consumerGroupId: process.env.EVENT_CONSUMER_GROUP_ID
}

module.exports = config
