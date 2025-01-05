import { mockData } from "./data.js";

// Resolvers define how to fetch the types defined in your schema.
export const resolvers = {
  // root queries
  Query: {
    user: (_: any, args: { id: string }) => {
      return mockData.users.find((user) => user.id === args.id) || null;
    },
    post: (_: any, args: { id: string }) => {
      return mockData.posts.find((post) => post.id === args.id) || null;
    },
  },
  User: {
    posts: (parent, args: { id: string }) => {
      return mockData.posts.filter((post) => {
        return parent.id == post.author.id;
      });
    },
  },
};
