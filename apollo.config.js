require('dotenv').config();

module.exports = {
  client: {
    service: { name: 'poeguide', url: process.env.GRAPHQL_API_URL },
    excludes: ['src/graphql-types.ts'],
  },
};
