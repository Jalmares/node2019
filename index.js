'use strict';

const express = require('express');
const connection = require('./module/db');

const app = express();

app.use(express.static('public'));
app.get('/animal', async (req, res) => {
	try {
		const [results, fields] = await connection.query(
			'SELECT * FROM animal');
		console.log(results); //results contains rows r
		console.log(fields); // fields contains extra m
		res.json(results);
	} catch (e) {
		console.log(e);
		res.send('db error :(');
	}
});


	app.get('/demo', (req, res) => {
		res.send('this is demo');
	});

	app.listen(4000, () => {
		console.log('server app start?');
	});
