const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = require('graphql');


module.exports = new GraphQLObjectType({
  name: 'Contact',
  description: 'Preffered methods of contact',

  fields: {
    email: {type: new GraphQLNonNull(GraphQLString)},
    twitter: {type: new GraphQLNonNull(GraphQLString)}
  }
});
