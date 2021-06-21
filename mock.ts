const { ApolloServer, makeExecutableSchema } = require('apollo-server')

const casual = require('casual')
const { importSchema } = require('graphql-import')

const PORT = 4001;

const typeDefs = importSchema('schema/schema.graphql');

const server = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs
  }),
  mocks: {
    Todo: () => ({
      id: casual.uuid,
      title: casual.title
    })
  },
});

server.listen({port: PORT}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
