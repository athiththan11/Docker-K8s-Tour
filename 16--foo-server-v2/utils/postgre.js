'use-strict';

const Pool = require('pg').Pool;

const pool = new Pool({
	user: process.env.POSTGRES_USERNAME,
	password: process.env.POSTGRES_PASSWORD,
	host: process.env.POSTGRES_HOST,
	database: process.env.POSTGRES_DB,
	port: process.env.POSTGRES_PORT,
});

const getMessages = (req, res) => {
	pool.query(`SELECT * FROM meta ORDER BY ID ASC`, (err, results) => {
		if (err) throw err;
		res.json(results.rows);
	});
};

const addMessage = (req, res) => {
	const message = req.body.message;

	pool.query(`INSERT INTO meta (message) VALUES ($1)`, [message], (err, results) => {
		if (err) throw err;
		res.status(201).send();
	});
};

module.exports = {
	getMessages,
	addMessage,
};
