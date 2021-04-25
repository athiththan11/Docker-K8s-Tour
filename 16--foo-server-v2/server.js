'use-strict';

/**
 * a simple express server developed for demonstration purpose.
 * The server contains a single GET resource which returns
 * back the eserver name and a custom message if set via the
 * environment variable
 */

const express = require('express')();
const bodyParser = require('body-parser');
const PORT = process.env.FOO_SERVER_PORT || 3000;
const Postgre = require('./utils/postgre');

express.use(bodyParser.json());

express.get('/v1/meta', (req, res) => {
	console.log(`[${new Date().toUTCString()}] -- [Foo] - GET '/v1/meta'`);
	res.json({
		server: 'Foo Server',
		env_message: process.env.FOO_SERVER_ENV_MESSAGE,
	});
});

express.get('/v1/messages', (req, res) => {
	console.log(`[${new Date().toUTCString()}] -- [Foo] - GET '/v1/messages'`);
	Postgre.getMessages(req, res);
});

express.post('/v1/messages', (req, res) => {
	console.log(`[${new Date().toUTCString()}] -- [Foo] - POST '/v1/messages'`);
	Postgre.addMessage(req, res);
});

express.listen(PORT, () => {
	console.log(`-----------------------------------------------
Foo server is up and running on port -> ${PORT}
-----------------------------------------------
`);
});
