// Apollo client allows us to connect to our backend from our frontend. The backend is currently deployed to Stepzen Graphql.

import { ApolloClient, InMemoryCache } from "@apollo/client";

// Use this method to get an instance of our client when our app is in use.
export const getClient = () => {
  const client = new ApolloClient({
    uri: process.env.API_URL,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
    },
  });

  return client;
};
