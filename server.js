const express = require('express');
const graphqlHTTP = require('express-graphql');
const config = require('./config');

const schema = require('./schema');

// The abstract DB for our local json data
const jsondb = require('./lib/jsondb');

const app = express();

app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true,
  context: {jsondb}
}));

app.listen(config.server.port);

console.log(`Running server at localhost: ${config.server.port}/graphql`);
