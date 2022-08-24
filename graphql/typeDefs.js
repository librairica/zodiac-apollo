const { gql } = require("apollo-server");

module.exports = gql`
  scalar Date
  scalar timestamp

  type Contact {
    id: ID!
    firstName: String!
    lastName: String!
    birthday: Date
  }

  input ContactInput {
    firstName: String
    lastName: String
    birthday: Date
  }

  type Query {
    getContact(ContactId: ID!): Contact!
    getContacts: [Contact]!
  }

  type Mutation {
    createContact(ContactInput: ContactInput): Contact
    updateContact(ContactId: ID!, ContactInput: ContactInput): Contact
    deleteContact(ContactId: ID!): Contact
    deleteContacts: [Contact!]!
  }

  enum Sign {
    ARIES
    TAURUS
    GEMINI
    CANCER
    LEO
    VIRGO
    LIBRA
    SCORPIO
    SAGGITARIUS
    CAPRICORN
    AQUARIUS
    PISCES
  }
`;

