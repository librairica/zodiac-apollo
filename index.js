const { ApolloServer } = require('apollo-server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { MongoClient, ServerApiVersion } = require('mongodb');

const typeDefs = require('./graphql/typeDefs');
// const resolvers = require('./graphql/resolvers');
const contacts = [
  {
    id: 123,
    firstName: "Leanne",
    lastName: "Blackwell",
    birthday: "07-26-88",
  },
  {
    id: 223,
    firstName: "Shelby",
    lastName: "Steinmeyer",
    birthday: "03-11-87",
  },
];
const resolvers = {
  Query: {
    getContacts: () => contacts,
  },
};

async function run() {
  // MONGO DB CONNECT
  require('dotenv').config()
  const username = encodeURIComponent(process.env.DB_USER);
  const password = encodeURIComponent(process.env.PASSWORD);
  const cluster = process.env.CLUSTER;

  let uri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority"`;
  console.log("uri: " + uri)
  // MONGO DB
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

  // APOLLO SERVER
  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
await server.listen();

console.log(`🚀  Server ready at: http://localhost:4000/graphql`);
}
run().catch(console.dir);

