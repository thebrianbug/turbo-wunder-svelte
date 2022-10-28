import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { configureWunderGraphServer } from '@wundergraph/sdk';
import type { HooksConfig } from 'generated-wundergraph/wundergraph.hooks';
import type { InternalClient } from 'generated-wundergraph/wundergraph.internal.client';

export default configureWunderGraphServer<HooksConfig, InternalClient>(() => ({
  hooks: {
    queries: {},
    mutations: {}
  },
  graphqlServers: [
    {
      serverName: 'gql',
      apiNamespace: 'gql',
      schema: new GraphQLSchema({
        query: new GraphQLObjectType({
          name: 'RootQueryType',
          fields: {
            hello: {
              type: GraphQLString,
              resolve() {
                return 'world';
              }
            }
          }
        })
      })
    }
  ]
}));
