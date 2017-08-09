const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'AcademicModule',
  description: 'Represents an academic module entry studied/completed.',

  fields: {
    title: {type: new GraphQLNonNull(GraphQLString)},
    grade: {type: new GraphQLNonNull(GraphQLString)},
    description: {type: GraphQLString},
  }
});
