'use strict';

var fs = require('fs');
var buff = require('buffer');

var buf = new Buffer(fs.readFileSync('./palette-bitmap.bmp'));
var buff = fs.readFileSync('./palette-bitmap.bmp');
//buf.toString('ascii', 0, 2);
var bufff = buff.toString('ascii');
//console.log(bufff);

var adjust = buf.toJSON().toString('ascii');
var jayson = buf.toJSON().data;
//console.log(jayson.toString());
//console.log(buf.toString('utf-8', 14, 320));
//console.log(buf.readInt32LE());
//console.log(buf.readUInt8(buf));

fs.readFile('./palette-bitmap.bmp', function(err, data) {
	//console.log(data.length);
	//console.log(data.toString('ascii', 0, 2));
	//console.log(data.toString('ascii', 80, 112));
});

fs.readFile('./non-palette-bitmap.bmp', function(err, data) {
	console.log(data.length);
	console.log(data);
	console.log(data.toString('ascii', 0, 2));
	console.log(data.toString('utf-8', 2, 32));
	console.log(data.toString('utf-8', 32, 80));
	console.log(data.toJSON().data.toString());

});

