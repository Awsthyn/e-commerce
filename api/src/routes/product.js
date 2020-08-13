const server = require('express').Router();
const { Product } = require('../db.js');


server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.json(products);
		})
		.catch(next);
});

server.get('/:id', (req, res, next) => {
	Product.findByPk(req.params.id)
		.then(products => {
			res.json(products);
		})
		.catch(next);
});
module.exports = server;
