const formatName = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatName', () => {
    it('should return error if argument are not a string or it is undefined', () => {
        expect(formatName(undefined)).to.equal('Error');
        expect(formatName(405669684)).to.equal('Error');
        expect(formatName({})).to.equal('Error');
        expect(formatName([])).to.equal('Error');
        expect(formatName(function() {})).to.equal('Error');
    });
    it('should return error if there is to much or not enough items in array', () => {
        expect(formatName('John Doe test')).to.equal('Error');
        expect(formatName('John')).to.equal('Error');
        expect(formatName('')).to.equal('Error');
    });
    it('should return corect answers', () => {
        expect(formatName('marcin starzyński')).to.equal('Marcin Starzyński');
        expect(formatName('MARCIN STARZYŃSKI')).to.equal('Marcin Starzyński');
        expect(formatName('MarCIn staRZYński')).to.equal('Marcin Starzyński');
    });
});