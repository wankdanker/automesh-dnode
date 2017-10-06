automesh-dnode
--------------

This is a plugin for automesh which provides support for a remote dnode server. If a remote service
is providing a dnode type endpoint in an automesh network, all that needs  to be done to access the remote
dnode is something like:

```js
var automesh = require('automesh');
var mesh = automesh();

mesh.require('some-dnode-service', function (err, remote) {
	//now you can call functions on `remote`
	remote.echo('hello', function (err, data) {
		console.log(data); 
	});
});

```

license
-------
MIT
