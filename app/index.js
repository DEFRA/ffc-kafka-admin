(async function start () {
  const { connect, disconnect, listConsumerGroups, deleteConsumerGroup } = require('./consumer-groups')

  if (process.argv.length < 1) {
    throw new Error('Invalid arguments supplied, need command [entity]')
  }

  const command = process.argv[0]
  const entity = process.argv[1]

  await connect()
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
  await disconnect()
}())
