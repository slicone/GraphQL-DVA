// Mock Data
export const mockData = {
  users: [],
  posts: [],
  comments: [],
};

// User Data
mockData.users = [
  {
    id: "1",
    name: "Alice",
    posts: [],
    friends: [],
  },
  {
    id: "2",
    name: "Bob",
    posts: [],
    friends: [],
  },
  {
    id: "3",
    name: "Charlie",
    posts: [],
    friends: [],
  },
];

// Post Data
mockData.posts = [
  {
    id: "101",
    title: "GraphQL Basics",
    content: "Learn how to use GraphQL for modern APIs.",
    author: mockData.users[0],
    comments: [],
  },
  {
    id: "102",
    title: "TypeScript for Beginners",
    content: "A guide to getting started with TypeScript.",
    author: mockData.users[1],
    comments: [],
  },
];

// Link Posts to Users
mockData.users[0].posts.push(mockData.posts[0]);
mockData.users[1].posts.push(mockData.posts[1]);

// Comment Data
mockData.comments = [
  {
    id: "1001",
    content: "Great post! Thanks for sharing.",
    author: mockData.users[2],
    post: mockData.posts[0],
  },
  {
    id: "1002",
    content: "Very helpful, I appreciate the effort!",
    author: mockData.users[0],
    post: mockData.posts[1],
  },
];

// Link Comments to Posts
mockData.posts[0].comments.push(mockData.comments[0]);
mockData.posts[1].comments.push(mockData.comments[1]);

// Establish Friendships
mockData.users[0].friends.push(mockData.users[1]);
mockData.users[1].friends.push(mockData.users[0], mockData.users[2]);
mockData.users[2].friends.push(mockData.users[1]);

export default mockData;
