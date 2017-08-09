const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

// Custom Types
const Experience = require('./types/experience');
const Education = require('./types/education');
const Skill = require('./types/skill');
const Interests = require('./types/interest');

/**
* The root query type is where in the data graph
* we can start asking questions
*/
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',

  fields: {

    experience: {
      type: Experience,
      description: '...',

      resolve: () => {
        // TODO: Connect me
      }
    },

    education: {
      type: Education,
      description: '...',

      resolve: () => {
        // TODO: Connect me
      }
    },

    skill: {
      type: Skill,
      args: {
        name: {type: GraphQLString}
      },
      resolve: () => {
        // TODO: Connect me
      }
    },

    interests: {
      type: Interests,
      description: '...',

      resolve: () => {
        // TODO: Connect me
      }
    },
  }
});

const schema = new GraphQLSchema({
  query: RootQueryType
});

module.exports = schema;
