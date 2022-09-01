import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://03.callisto.network/subgraphs/name/soyswap",
  }),
  cache: new InMemoryCache(),
});
