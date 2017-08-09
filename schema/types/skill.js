const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');

const ratingEnum = require('./../enums/rating');

module.exports = new GraphQLObjectType({
  name: 'Skill',
  description: 'A skill type that represents something I have knowledge in.',

  fields: {
    name: {type: new GraphQLNonNull(GraphQLString)},
    rating: {type: new GraphQLNonNull(ratingEnum)},
    details: {type: new GraphQLNonNull(GraphQLString)},
  }
});
