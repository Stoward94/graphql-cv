const express = require('express');
const graphqlHTTP = require('express-graphql');
const config = require('./config');

const schema = require('./schema');

// The abstract DB for our local json data
const jsondb = require('./lib/jsondb');

const app = express();

app.get('/', (req, res) => {
  res.redirect('/graphql');
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
  context: {jsondb}
}));

// 404 Middleware
app.use((req, res, next) => {
  const msg = '404 - Have you tried the <a href="/">GraphQL</a> interface?';
  res.status(404).send(msg);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 - Looks like we have a problem...');
});

app.listen(config.server.port);

console.log(`Running server at localhost: ${config.server.port}/graphql`);
