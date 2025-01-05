export const typeDefs = `#graphql

type User {
  id: ID!
  name: String!
  posts: [Post]
  friends: [User]
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  comments: [Comment]
}

type Comment {
  id: ID!
  content: String!
  author: User!
  post: Post!
}

type Query {
  user(id: ID!): User
  post(id: ID!): Post
}



`;
