const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} = require('graphql');

const academicModule = require('./academic_module');

module.exports = new GraphQLObjectType({
  name: 'Education',
  description: 'Education type represents an academic entry',

  fields: {
    school: {type: new GraphQLNonNull(GraphQLString)},
    degree: {type: new GraphQLNonNull(GraphQLString)},
    fieldOfStudy: {type: new GraphQLNonNull(GraphQLString)},
    grade: {type: new GraphQLNonNull(GraphQLString)},
    startDate: {type: new GraphQLNonNull(GraphQLString)},
    endDate: {type: GraphQLString},
    modules: {type: new GraphQLList(academicModule)},
  }
});
