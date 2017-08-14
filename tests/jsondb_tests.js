const chai = require('chai');
const expect = chai.expect;

const jsondb = require('./../lib/jsondb');

describe('jsondb', () => {
  describe('#getName', () => {
    it('should return a string Luke Stoward', () => {
      const name = jsondb.getName();

      expect(name).to.exist;
      expect(name).to.equal('Luke Stoward');
    });
  });

  describe('#getContact', () => {
    it('should return an object with contact details', () => {
      const contact = jsondb.getContact();

      expect(contact).to.exist;
      expect(contact).to.be.an('object');
      expect(contact.email).to.exist;
      expect(contact.twitter).to.exist;
    });
  });

  describe('#getWebPresence', () => {
    it('should return an object with web presence details', () => {
      const presence = jsondb.getWebPresence();

      expect(presence).to.exist;
      expect(presence).to.be.an('object');
      expect(presence.github).to.exist;
      expect(presence.linkedIn).to.exist;
      expect(presence.stackoverflow).to.exist;
    });
  });

  describe('#getEducation', () => {
    it('should return an array of objects about my education history', () => {
      const education = jsondb.getEducation();

      expect(education).to.exist;
      expect(education).to.be.an('array');
      expect(education).to.have.lengthOf(3);

      education.forEach((e) => {
        expect(e.school).to.exist;
        expect(e.grade).to.exist;
      });
    });
  });

  describe('#getExperience', () => {
    it('should return an array of objects about my job experience', () => {
      const experience = jsondb.getExperience();

      expect(experience).to.exist;
      expect(experience).to.be.an('array');
      expect(experience).to.have.lengthOf.at.least(3);

      experience.forEach((e) => {
        expect(e.jobTitle).to.exist;
        expect(e.company).to.exist;
        expect(e.languages).to.exist;
      });
    });
  });

  describe('#getSkills', () => {
    it('should return an array of objects containing my skills', () => {
      const skills = jsondb.getSkills();

      expect(skills).to.exist;
      expect(skills).to.be.an('array');
      expect(skills).to.have.lengthOf.at.least(5);

      skills.forEach((e) => {
        expect(e.name).to.exist;
        expect(e.rating).to.exist;
        expect(e.details).to.exist;
      });
    });
  });
});
