'use strict';

var fs = require('fs');
var buff = require('buffer');

var buf = new Buffer(fs.readFileSync('./palette-bitmap.bmp'));
var buff = fs.readFileSync('./non-palette-bitmap.bmp');
console.log(buf.readUInt32LE(10));
console.log(buff.readUInt32LE(10));

function notPalette(data) {
	var starting = data.readUInt32LE(10);
	for (var i = starting; i < data.length; i++) {
		var random = Math.ceil(Math.random() *255);
		data.writeUInt8(random, i);
	}
	fs.writeFile('test.bmp', data);
	return 'bitmap randomized';
};

notPalette(buff);
/*
fs.readFile('./palette-bitmap.bmp', function(err, data) {
	var starting = data.readUInt32LE(10);
	for (var i = starting; i < data.length; i+=4) {
		//data.writeUInt8(255 - data.readUInt8(i), i);
		data.writeUInt8(255 - data.readUInt8(i), i);
	}
	fs.writeFile('test2.bmp', data);
});

fs.readFile('./non-palette-bitmap.bmp', function(err, data) {
	var starting = data.readUInt32LE(10);
	for (var i = starting; i < data.length; i++) {
		var random = Math.ceil(Math.random() * 255);
		data.writeUInt8(random, i);
	}
	fs.writeFile('test.bmp', data);
});
*/
