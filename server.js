const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");

// Define your GraphQL schema and resolvers
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

const app = express();

// Enable CORS
app.use(cors());

// Apply the Apollo Server middleware to your custom server
server.applyMiddleware({ app });

// Start the server
// app.listen({ port: 3000 }, () =>
//   console.log(`Server ready at http://localhost:3000${server.graphqlPath}`)
// );
