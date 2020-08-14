const server = require('express').Router();
const { Product } = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.json(array);
		})
		.catch(next);
});

server.get('/:id', (req, res, next) => {
	Product.findByPk(req.params.id)
		.then(product => {
			res.json(product);
		})
		.catch(next);
});
module.exports = server;


