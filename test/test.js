//this is for tests!//
var expect = require('chai').expect;
var bitmap = require('../bitmap.js');
var fs = require('fs');

var buff = fs.readFileSync('./non-palette-bitmap.bmp');

describe('bitmap', function() {
	it('will display rainbow colors', function() {
		expect(notPalette(buff)).to.equal('bitmap randomized');
	});
});
