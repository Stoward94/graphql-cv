const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = require('graphql');


module.exports = new GraphQLObjectType({
  name: 'WebPresence',
  description: 'A collection of URLs to various web mediums',

  fields: {
    github: {type: new GraphQLNonNull(GraphQLString)},
    linkedIn: {type: new GraphQLNonNull(GraphQLString)},
    stackoverflow: {type: new GraphQLNonNull(GraphQLString)}
  }
});
