import {
  configureWunderGraphApplication,
  cors,
  EnvironmentVariable,
  introspect,
  templates
} from '@wundergraph/sdk';
import server from './wundergraph.server';
import operations from './wundergraph.operations';

const countries = introspect.graphql({
  apiNamespace: 'countries',
  url: 'https://countries.trevorblades.com/'
});

const db = introspect.postgresql({
  databaseURL: new EnvironmentVariable('DATABASE_URL'),
  apiNamespace: 'db'
});

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
  apis: [countries, db],
  server,
  operations,
  codeGenerators: [
    {
      templates: [
        // use all the typescript react templates to generate a client
        ...templates.typescript.all,
        templates.typescript.operations,
        templates.typescript.linkBuilder
      ]
    },
    {
      templates: [templates.typescript.client],
      path: '../../packages/generated-wundergraph'
    }
  ],
  cors: {
    ...cors.allowAll,
    allowedOrigins:
      process.env.NODE_ENV === 'production'
        ? [
            // change this before deploying to production to the actual domain where you're deploying your app
            'http://localhost:3000'
          ]
        : [
            'http://localhost:3000',
            'http://127.0.0.1:3000/',
            new EnvironmentVariable('WG_ALLOWED_ORIGIN')
          ]
  },
  dotGraphQLConfig: {
    hasDotWunderGraphDirectory: false
  },
  security: {
    enableGraphQLEndpoint:
      process.env.NODE_ENV !== 'production' || process.env.GITPOD_WORKSPACE_ID !== undefined
  }
});
