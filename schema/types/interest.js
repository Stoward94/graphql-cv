const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');

const ratingEnum = require('./../enums/rating');

module.exports = new GraphQLObjectType({
  name: 'Interest',
  description: 'A personal interest that I have.',

  fields: {
    name: {type: new GraphQLNonNull(GraphQLString)},
    rating: {type: new GraphQLNonNull(ratingEnum)},
    details: {type: new GraphQLNonNull(GraphQLString)},
  }
});
