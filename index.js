'use strict';

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('Hello from my Node server');
});

app.get('/demo', (req, res) => {
	res.send('this is demo');
});

app.listen(4000, () => {
	console.log('server app start?');
});
