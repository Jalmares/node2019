'use strict';

const express = require('express');
const connection = require('./module/db');

const app = express();
const bodyParser = require('body-parser');

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

	app.get('/animals', async (req, res) =>{
		console.log(req.query);
		//res.send(`query params? ${req.query}`);
		try {
			const [results] = await connection.query(
				'SELECT * FROM animal WHERE name LIKE ?',
				[req.query.name]);
			res.json(results);
		} catch (e) {
			res.send(`db error ${e}`);
		}
	});

	app.post('/animals', bodyParser.urlencoded({extended: true}), async (req, res) => {
		console.log(req.body);
		try{
			const [result] = await connection.query(
				'INSERT INTO animal (name) VALUES (?)',
				[req.body.name]
			);
			res.json(result);
		}catch (e) {
			console.log(e);
			res.send('db error');
		}
	});

	app.get('/', (req, res) =>{
		res.send('Hello from my node server');
	});

	app.get('/demo', (req, res) => {
		res.send('this is demo');
	});

	app.listen(4000, () => {
		console.log('server app start?');
	});
