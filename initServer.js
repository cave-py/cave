const {typeDefs, resolvers} = require("./src")

const { ApolloServer, gql } = require('apollo-server');

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});