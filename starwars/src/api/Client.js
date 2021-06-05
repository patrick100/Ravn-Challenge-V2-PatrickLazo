import { ApolloClient, InMemoryCache} from '@apollo/client';
import { relayStylePagination } from "@apollo/client/utilities";

const BASE_URL = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

export const client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache({typePolicies: {
    Query: {
      fields: {
        allPeople: {
            merge(existing, incoming, { readField }) {
            const people = existing ? { ...existing.people } : {};
            incoming.people.forEach(person => {
              people[readField("id", person)] = person;
            });
            return {
              pageInfo: incoming.pageInfo,
              people: people
            };
            },
            read(existing) {
              if (existing) {
                return {
                  people: Object.values(existing.people),
                  pageInfo:existing.pageInfo,
                };
              }
            },
        },
      },
    },
  },})
});