const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList
} = require('graphql');


module.exports = new GraphQLObjectType({
  name: 'Experience',
  description: 'Experience type represents a work experience entry',

  fields: {
    jobTitle: {type: new GraphQLNonNull(GraphQLString)},
    company: {type: new GraphQLNonNull(GraphQLString)},
    location: {type: new GraphQLNonNull(GraphQLString)},
    startDate: {type: new GraphQLNonNull(GraphQLString)},
    startDate: {type: new GraphQLNonNull(GraphQLString)},
    endDate: {type: GraphQLString},
    current: {type: new GraphQLNonNull(GraphQLBoolean)},
    description: {type: GraphQLString},
    languages: {type: new GraphQLList(GraphQLString)},
  }
});
