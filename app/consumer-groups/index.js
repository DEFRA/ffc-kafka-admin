const { EventConsumerGroup } = require('../events')
const config = require('../config')
let consumerGroup

const listConsumerGroups = async () => {
  try {
    const groups = await consumerGroup.listConsumerGroups()
    console.info(groups)
    return groups
  } catch (err) {
    console.error('Unable to retrieve consumer groups: ', err)
  }
}

const deleteConsumerGroup = async (consumerGroupId) => {
  try {
    const existingGroups = await listConsumerGroups()
    if (existingGroups.groups.some(x => x.groupId === consumerGroupId)) {
      await consumerGroup.deleteConsumerGroup(consumerGroupId)
    }
    console.info(`Consumer group deleted ${consumerGroupId}`)
  } catch (err) {
    console.error('Unable to delete consumer group', err)
  }
}

const connect = async () => {
  consumerGroup = new EventConsumerGroup(config)
  await consumerGroup.connect()
}

const disconnect = async () => {
  await consumerGroup.closeConnection()
}

module.exports = {
  connect,
  disconnect,
  listConsumerGroups,
  deleteConsumerGroup
}
