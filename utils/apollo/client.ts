import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "http://65.21.54.13:8000/subgraphs/name/soyfinance",
  }),
  cache: new InMemoryCache(),
});
