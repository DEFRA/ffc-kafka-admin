# FFC Kafka Admin

Application and Docker image to administer Kafka.  Supports Kafka and Azure Event Hubs

## Connetion details
Connection details should be supplied as environment variables to the docker run command.

- `EVENT_HOST` - host name of Kafka broker, not required if using Azure Event Hubs
- `EVENT_PORT` - port used by Kafka broker host, defaults to `9093` if not supplied.  Not required if using Azure Event Hubs
- `EVENT_AUTHENTICATION` - authentication mechanism, available options are `connectionString` (for Azure Event Hubs), `password` for username and password or `none` for no authentication.  Defaults to `connectionString`
- `EVENT_CONNECTION_STRING` - connection string for Azure Event Hubs
- `EVENT_USERNAME` - username for `password` authentication
- `EVENT_PASSWORD` - password for `password` authentication
- `EVENT_MECHANISM` - authentication mechanism for `password` authentication, available options are `plain`, `scram-sha-256` or `scram-sha-512`.  Defaults to `plain`

## Capabilities
- list consumer groups
- delete consumer groups

### List consumer groups
```
docker run -rm -e "EVENT_CONNECTION_STRING=myConnectionString" defradigital/ffc-kafka-admin ./app list-consumer-groups
```

### Delete consumer groups
```
docker run -rm -e "EVENT_CONNECTION_STRING=myConnectionString" defradigital/ffc-kafka-admin ./app delete-consumer-group myConsumerGroupId
```
If the consumer group does not exist then no action will be taken.
## Licence

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT LICENCE found at:

<http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3>

The following attribution statement MUST be cited in your products and applications when using this information.

> Contains public sector information licensed under the Open Government license v3

### About the licence

The Open Government Licence (OGL) was developed by the Controller of Her Majesty's Stationery Office (HMSO) to enable information providers in the public sector to license the use and re-use of their information under a common open licence.

It is designed to encourage use and re-use of information freely and flexibly, with only a few conditions.
