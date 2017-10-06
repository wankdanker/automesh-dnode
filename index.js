var dnode = require('dnode');

var streams = [];
var remotes = [];
var dnodes = [];

module.exports = function (stream, cb) {
	var i = streams.indexOf(stream);

	if (~i) {
		return cb(null, remotes[i]);
	}
	//else

	//add this stream to the streams array
	i = streams.push(stream) - 1;

	var d = dnode();

	//add this dnode to the dnodes array
	dnodes[i] = d;

	d.on('remote', function (remote) {
		remotes[i] = remote;

		cb(null, remote);
	});

	//not totally sure which of these works
	d.on('end', function () {
		remove(stream);
	});

	//or if this works
	stream.on('end', function () {
		remove(stream);
	});

	stream.pipe(d).pipe(stream)
};

function remove(stream) {
	var i = streams.indexOf(stream);

	if (~i) {
		streams.splice(i, 1);
		remotes.splice(i, 1);
		dnodes.splice(i, 1);
	}
}
