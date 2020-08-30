'use-strict';

/**
 * a simple express server developed for demonstration purpose.
 * The server contains a GET /v1/meta resource which returns
 * back the eserver name and a custom message if set via the
 * environment variable.
 *
 * Also, it contains another GET /v1/info resource which returns
 * the content of an info.txt file placed in the server
 */

const fs = require('fs');
const path = require('path');
const express = require('express')();
const PORT = process.env.BAR_SERVER_PORT || 4000;

express.get('/v1/meta', (req, res) => {
	console.log(`[${new Date().toUTCString()}] -- [Bar] - '/v1/meta'`);
	res.json({
		server: 'Bar Server',
		env_message: process.env.BAR_SERVER_ENV_MESSAGE,
	});
});

express.get('/v1/info', (req, res) => {
	console.log(`[${new Date().toUTCString()}] -- [Bar] - '/v1/info'`);
	try {
		let content = fs.readFileSync(path.join(process.cwd(), 'info.txt'), { encoding: 'utf8' });
		if (content) {
			res.json({
				info_content: content,
			});
		}
	} catch (err) {
		res.json({
			code: 19,
			message: 'No info.txt found in the server',
			error: err.message,
		});
	}
});

express.listen(PORT, () => {
	console.log(`-----------------------------------------------
Bar server is up and running on port -> ${PORT}
-----------------------------------------------
`);
});
