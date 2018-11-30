const {ApolloServer} = require('apollo-server') ;
const schema = require('./schema')
const dataSource = require('./Datasource')

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
    schema,
    dataSources: () => {
        return {
            trackerAPI: new dataSource()
        }
    },
    mocks: false});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
