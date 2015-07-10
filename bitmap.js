'use strict';

var fs = require('fs');
var buff = require('buffer');

var buf = new Buffer(fs.readFileSync('./palette-bitmap.bmp'));
var buff = fs.readFileSync('./non-palette-bitmap.bmp');
//buf.toString('ascii', 0, 2);

fs.readFile('./palette-bitmap.bmp', function(err, data) {
	//console.log(data.readUInt32LE(10));
	for (var i = 54; i < data.length; i++) {
		data.writeUInt8(0, i);
	}
	fs.writeFile('test2.bmp', data);
});

fs.readFile('./non-palette-bitmap.bmp', function(err, data) {
	for (var i = 54; i < data.length; i++) {

		data.writeUInt8(255, i);
	}
	//console.log(data.readUInt32LE(10));
	//console.log(data.readUInt8(14));
	fs.writeFile('test.bmp', data);
});

