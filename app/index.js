const { connect, disconnect, listConsumerGroups, deleteConsumerGroup } = require('./consumer-groups')

const connectToBroker = async () => {
  try {
    await connect()
  } catch (err) {
    console.error('Unable to connect to Kafka', err)
  }
}

const disconnectFromBroker = async () => {
  try {
    await disconnect()
  } catch (err) {
    console.error('Unable to disconnect to Kafka', err)
  }
}

const runAdminCommand = async (command, entity) => {
  switch (command) {
    case 'delete-consumer-group':
      await deleteConsumerGroup(entity)
      break
    case 'list-consumer-groups':
      await listConsumerGroups()
      break
    default:
      console.info(`Command ${command} not found`)
      break
  }
}

(async function start () {
  if (process.argv.length < 3) {
    throw new Error('Invalid arguments supplied, need command [entity]')
  }

  const command = process.argv[2]
  const entity = process.argv[3]

  await connectToBroker()
  await runAdminCommand(command, entity)
  await disconnectFromBroker()
}())
