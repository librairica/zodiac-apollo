const { ApolloServer, gql } = require("apollo-server");

//GraphQL Schemas
const typeDefs = gql`
scalar Date
scalar timestamp

  type Contact {
    id: ID!
    firstName: String!
    lastName: String!
    birthday: Date
    birthTimestamp: timestamp
    sunSignEmoji: String
  }
  input ContactInput {
    id: ID!
    firstName: String
    lastName: String
    birthday: String
    sunSignEmoji: String
  }
  type Query {
    getContact(ContactId: ID!): Contact!
    getContacts: [Contact!]!
  }
  type Mutation {
    createContact(ContactInput: ContactInput): Contact
    updateContact(ContactId: ID!, ContactInput: ContactInput): Contact
    deleteContact(ContactId: ID!): Contact
    deleteContacts: [Contact!]!
  }
`;