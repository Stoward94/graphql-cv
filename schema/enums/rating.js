const {GraphQLEnumType} = require('graphql');


module.exports = new GraphQLEnumType({
  name: 'Rating',
  description: 'Rating ENUM represents common rating classifications',

  values: {
    Novice: {value: 'Novice'},
    Working: {value: 'Working knowledge'},
    Experienced: {value: 'Experienced'}
  }
});
