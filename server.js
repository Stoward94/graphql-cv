const express = require('express');
const graphqlHTTP = require('express-graphql');
const config = require('./config');

const schema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(config.server.port);

console.log(`Running server at localhost: ${config.server.port}/graphql`);
