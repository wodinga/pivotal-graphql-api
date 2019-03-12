const {ApolloServer} = require('apollo-server')
const schema = require('./schema')
const datasource = require('./Datasource')
const logger = require('../utils/logger')

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  schema,
  formatError: error => {
    logger.error(error.message)
    return error
  },
  formatResponse: response => {
    logger.info(response)
    return response
  },
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  },
  context: () => {
    return {
      token: process.env.TOKEN
    }
  },
  mocking: true,
  tracing: true,
  dataSources: () => {
    return {trackerAPI: new datasource()}
  }
})

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen(8080).then(({url}) => {
  console.log(`🚀  Server ready at ${url}`)
})
