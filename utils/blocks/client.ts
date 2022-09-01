import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const blockClient = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://03.callisto.network/subgraphs/name/blocks",
  }),
  cache: new InMemoryCache(),
});
