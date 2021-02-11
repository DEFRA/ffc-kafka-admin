const EventBase = require('./event-base')

class EventConsumerGroup extends EventBase {
  constructor (config, action) {
    super(config)
  }

  async connect () {
    await super.connect()
    this.admin = this.kafka.admin()
    await this.admin.connect()
  }

  async listConsumerGroups () {
    return await this.admin.listGroups()
  }

  async deleteConsumerGroup (groupId) {
    await this.admin.deleteGroups([groupId])
    console.info(`Deleted Consumer Group: ${groupId}`)
  }

  async closeConnection () {
    await this.admin.disconnect()
  }
}

module.exports = EventConsumerGroup
