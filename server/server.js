const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/definitions/schema");
const BoatsAPI = require("./graphql/datasources/boats");
const resolvers = require("./graphql/resolvers");

const PORT = process.env.PORT || '4000'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    boatsAPI: new BoatsAPI()
  })
});

server.listen().then(({ port: PORT }) => {
  console.log(`🚀 Server ready at ${PORT}`);
});
