var dnode = require('dnode');

module.exports = function (stream, cb) {
	var d = dnode();

	d.on('remote', function (remote) {
		cb(null, remote);
	});

	stream.pipe(d).pipe(stream)
};
