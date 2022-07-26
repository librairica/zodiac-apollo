require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    message: String
  }
  type Query {
    book: String
  }
`
const resolvers = {
  Query: {
    book: () => "Testing",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});