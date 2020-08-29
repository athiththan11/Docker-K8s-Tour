'use-strict';

/**
 * a simple express server developed for demonstration purpose.
 * The server contains a single GET resource which returns
 * back the eserver name and a custom message if set via the
 * environment variable
 */

const express = require('express')();
const PORT = process.env.FOO_SERVER_PORT || 3000;

express.get('/v1/meta', (req, res) => {
	console.log(`[${new Date().toUTCString()}] -- [Foo] - '/v1/meta'`);
	res.json({
		server: 'Foo Server',
		env_message: process.env.FOO_SERVER_ENV_MESSAGE,
	});
});

express.listen(PORT, () => {
	console.log(`-----------------------------------------------
Foo server is up and running on port -> ${PORT}
-----------------------------------------------
`);
});
