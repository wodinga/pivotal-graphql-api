const {ApolloServer, gql} = require('apollo-server') ;
const {importSchema}  = require('graphql-import');
const makeExecutableSchema = require('graphql-tools')

const typeDefs = importSchema('Schemas/schema.graphql')
const resolvers = {}

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers , mocks: true});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
