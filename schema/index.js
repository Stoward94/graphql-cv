const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');

// Custom Types
const Contact = require('./types/contact');
const WebPresence = require('./types/web_presence');
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

    name: {
      type: GraphQLString,
      description: 'Who I am',

      resolve: (obj, agrs, {jsondb}) => jsondb.getName()
    },

    contact: {
      type: Contact,
      description: 'Preffered methods of contact',

      resolve: (obj, agrs, {jsondb}) => jsondb.getContact()
    },

     presence: {
      type: WebPresence,
      description: 'A collection of URLs to various web mediums',

      resolve: (obj, agrs, {jsondb}) => jsondb.getWebPresence()
    },

    experience: {
      type: new GraphQLList(Experience),
      description: 'A list of my most relevant work experience',

      resolve: (obj, agrs, {jsondb}) => jsondb.getExperience()
    },

    education: {
      type: new GraphQLList(Education),
      description: 'A list of my academic studies',

      resolve: (obj, agrs, {jsondb}) => jsondb.getEducation()
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
