const server = require('express').Router();
const { Product, Category, Image, productsInCategory, Review, initialReview } = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll({ include: [Category, Image] })
		.then((products) => {
			res.json(products);
		})
		.catch(next);
});

server.get('/:id', (req, res, next) => {
	Product.findByPk(req.params.id, { include: [Category, Image] })
		.then((product) => {
			res.json(product);
		})
		.catch(next);
});

server.post('/', (req, res, next) => {
	let { name, description, price, stock, image, category } = req.body;
	image === '' ? (image = 'botas') : null;

	const categories = category; // Viene del cliente como category pero sería mejor si dijera categories
	Product.create({
		name: name,
		description: description,
		price: price,
		stock: stock,
		images: [{ url: image }, { url: image + 2 }, { url: image + 3 }],
	})
		.then((product) =>
			categories.forEach((categoryId) => {
				Category.findByPk(categoryId).then((category) => product.addCategory(category));
			})
		)
		.then(() => res.sendStatus(201))
		.catch(next);
});

server.put('/:id', (req, res) => {
	const { id } = req.params;
	const { name, description, price, stock, image, category } = req.body;
	const categories = category;
	console.log(categories)
	try {
		Product.update(
			{
				name,
				description,
				price,
				stock,
			},
			{ where: { id } }
		)
			.then(() => {
				productsInCategory.destroy({ where: { productId: id } })
				res.sendStatus(200);
			})
			.then(() => {
				productsInCategory.bulkCreate(
					categories.map((e) => {
						if (typeof e === "object") return { productId: id, categoryId: e.id }
						else return { productId: id, categoryId: e };
					})
				);
			})
			.then(() => res.sendStatus(200));
	} catch (error) {
		console.log(error);
	}
});

server.delete('/:id', (req, res, next) => {
	try {
		const { id } = req.params;
		Product.destroy({ where: { id } }).then(() => {
			res.sendStatus(200);
		});
	} catch (error) {
		console.error(error.message);
	}
});



// S54
server.post("/:id/review", (req, res, next) => {
	const { rating, description, date, userId } = req.body;
	Review.bulkCreate({
		where: {
			rating,
			description,
			date,
			userId,
			productId: req.params
		}, include: initialReview
	})
		.then(() => {
			res.sendStatus(201);
		})
		.catch(next);
});

// S55
server.put("/:id/review/:idReview", (req, res, next) => {
	const { id, idReview } = req.params;
	try {
		Review.update(
			{
				rating,
				description,
				date
			},
			{ where: { productId: id, id: idReview }, include: initialReview }
		).then(() => {
			initialReview.destroy({ where: { productId: id } }) ////////////////////////////
			res.sendStatus(200);
		})
	} catch (error) {
		console.error(error.message);
	}
});


// S56
server.delete("/:id/review/:idReview", (req, res, next) => {
	const { id, idReview } = req.params;
	try {
		Review.destroy({ where: { productId: id, id: idReview }, include: initialReview }).then(() => {
			res.sendStatus(200);
		});
	} catch (error) {
		console.error(error.message);
	}
});

// S57
server.get("/:id/review/", (req, res, next) => {
	const { id } = req.params;
	Review.findAll({ where: { productsId: id }, include: initialReview })
		.then((reviews) => {
			res.json(reviews);
		})
		.catch(next);
});
module.exports = server;
