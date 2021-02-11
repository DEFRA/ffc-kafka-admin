const { EventConsumerGroup } = require('../events')
const config = require('./config')
let consumerGroup

const listConsumerGroups = async () => {
  const groups = await consumerGroup.listConsumerGroups()
  console.info(groups)
  return groups
}

const deleteConsumerGroup = async (consumerGroupId) => {
  const existingGroups = await listConsumerGroups()
  if (existingGroups.some(x => x.groupId === consumerGroupId)) {
    await consumerGroup.deleteConsumerGroup(consumerGroupId)
  }
  console.info(`Consumer group deleted ${consumerGroupId}`)
}

const connect = async () => {
  consumerGroup = new EventConsumerGroup(config)
  await consumerGroup.connect()
}

const disconnect = async () => {
  await consumerGroup.disconnect()
}

module.exports = {
  connect,
  disconnect,
  listConsumerGroups,
  deleteConsumerGroup
}
