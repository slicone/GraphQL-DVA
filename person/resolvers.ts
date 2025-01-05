import { persons } from "./data.js";

// Helper function to resolve friends
const resolveFriends = (friendIds) => {
  return friendIds.map((friendId) => persons.find((person) => person.id === friendId));
};

// Resolver functions
export const resolvers = {
  Query: {
    persons: () => persons,
    person: (_, { id }) => persons.find((person) => person.id === id),
  },
  Person: {
    friends: (parent) => resolveFriends(parent.friends),
  },
};