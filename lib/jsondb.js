
const cv = require('./../cv_data.json');

module.exports = {

    getName() {
      return cv.name;
    },

    getContact() {
      return {
        email: cv.email,
        twitter: cv.twitter
      };
    },

    getWebPresence() {
      return {
        github: cv.github,
        linkedIn: cv.linkedIn,
        stackoverflow: cv.stackoverflow
      };
    },

    getEducation() {
        return cv.education;
    },

    getExperience() {
      return cv.experience;
    }
};
