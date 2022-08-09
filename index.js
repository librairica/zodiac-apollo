const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
require("dotenv").config();

// The config file contains any project configuration
// MONGODB will be something like this "'mongodb://username:password@host:port/database?options...'", you can get your own from Mongodb.com.
// PORT: process.env.PORT || '5000', if no env variables.

// const { MONGODB ,PORT } = require('./config');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose
  .connect(process.env.MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log('MongoDB is connected ...');
    return server.listen({
      port: process.env.PORT
    });
  })
  .then(res => {
    console.log('Server running at ', res.url);
  });
