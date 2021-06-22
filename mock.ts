const { ApolloServer, makeExecutableSchema } = require('apollo-server')
const casual = require('casual')
const { importSchema } = require('graphql-import')

const PORT = 4000;

const typeDefs = importSchema('schema/schema.graphql');

const server = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs,
    cors: false
  }),
  mocks: {
    ToDo: () => ({
      id: casual.uuid,
      title: casual.title
    }),
  },
  fetchOptions: {
    mode: 'no-cors',
  },
});

server.listen({port: PORT}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
