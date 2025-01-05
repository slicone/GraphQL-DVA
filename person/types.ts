export const typeDefs = `#graphql
  type Person{
    id: ID!
    name: String!
    phoneNumbers: [String]!
    friends: [Person]!
  }

  type Query {
    person(id: ID!): Person
    persons: [Person]
  }

`;
