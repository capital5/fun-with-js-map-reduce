/**
 * @venus-library mocha
 * @venus-include ../convert.js
 * @venus-code ../convert.js
 */
describe('hexToDec', function () {

    it('should convert F in hex to 15 in dec', function () {
        var result = My.hexToDec('F');
        expect(result).to.equal(15);
    });

    it('should convert f in hex to 15 in dec', function () {
        var result = My.hexToDec('f');
        expect(result).to.equal(15);
    });

    it('should convert fF in hex to 255 in dec', function () {
        var result = My.hexToDec('fF');
        expect(result).to.equal(255);
    });

    it('should convert Beef in hex to 48879 in dec', function () {
        var result = My.hexToDec('Beef');
        expect(result).to.equal(48879);
    });

    it('should convert AbcdEf in hex to 11259375 in dec', function () {
        var result = My.hexToDec('AbcdEf');
        expect(result).to.equal(11259375);
    });

});

/**
 * @venus-library mocha
 * @venus-include ../convert.js
 * @venus-code ../convert.js
 */
describe('hexToDecNoFairYouCheated', function () {

    it('should convert F in hex to 15 in dec', function () {
        var result = My.hexToDecNoFairYouCheated('F');
        expect(result).to.equal(15);
    });

    it('should convert f in hex to 15 in dec', function () {
        var result = My.hexToDecNoFairYouCheated('f');
        expect(result).to.equal(15);
    });

    it('should convert fF in hex to 255 in dec', function () {
        var result = My.hexToDecNoFairYouCheated('fF');
        expect(result).to.equal(255);
    });

    it('should convert Beef in hex to 48879 in dec', function () {
        var result = My.hexToDecNoFairYouCheated('Beef');
        expect(result).to.equal(48879);
    });

    it('should convert AbcdEf in hex to 11259375 in dec', function () {
        var result = My.hexToDecNoFairYouCheated('AbcdEf');
        expect(result).to.equal(11259375);
    });

});

/**
 * @venus-library mocha
 * @venus-include ../convert.js
 * @venus-code ../convert.js
 */
describe('hexToDecOldSchool', function () {

    it('should convert F in hex to 15 in dec', function () {
        var result = My.hexToDecOldSchool('F');
        expect(result).to.equal(15);
    });

    it('should convert f in hex to 15 in dec', function () {
        var result = My.hexToDecOldSchool('f');
        expect(result).to.equal(15);
    });

    it('should convert fF in hex to 255 in dec', function () {
        var result = My.hexToDecOldSchool('fF');
        expect(result).to.equal(255);
    });

    it('should convert Beef in hex to 48879 in dec', function () {
        var result = My.hexToDecOldSchool('Beef');
        expect(result).to.equal(48879);
    });

    it('should convert AbcdEf in hex to 11259375 in dec', function () {
        var result = My.hexToDecOldSchool('AbcdEf');
        expect(result).to.equal(11259375);
    });

});