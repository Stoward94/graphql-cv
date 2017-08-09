const {GraphQLEnumType} = require('graphql');


module.exports = new GraphQLEnumType({
  name: 'Rating',
  description: 'Rating ENUM represents common rating classifications',

  values: {
    Basic: {value: 'Basic'},
    Expert: {value: 'Expert'}
  }
});
