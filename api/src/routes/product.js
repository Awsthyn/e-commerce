const server = require("express").Router();
const { Product, Category, Image } = require("../db.js");

server.get("/", (req, res, next) => {
  Product.findAll({ include: [Category, Image] })
    .then((products) => {

      res.json(products);
    })
    .catch(next);
});

server.get("/:id", (req, res, next) => {
  Product.findByPk(req.params.id, { include: [Category, Image] })
    .then((product) => {
      res.json(product);
    })
    .catch(next);
});

server.post("/", (req, res,next) =>{
	let {name, description, price, stock, image, category} = req.body
	image === '' ? image = "botas" : null;

    const categories = category // Viene del cliente como category pero sería mejor si dijera categories
    Product.create({
			name: name,
			description: description,
			price: price,
			stock: stock,
			images: [{url: image },{url: image+2},{url: image+3}]
        })
    .then(product => categories.forEach(categoryId => {
            Category.findByPk(categoryId)
            .then(category => product.addCategory(category))
        }))
    .then(() => res.sendStatus(201))
    .catch(next)
})


server.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock, image } = req.body;
    Product.update(
      {
        name,
        description,
        price,
        stock,
      },
      { where: { id } }
    ).then(() => {
      res.sendStatus(200);
    });
  } catch (error) {
    console.error(error.message);
  }
});

server.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    Product.destroy({ where: { id } }).then(() => {
      res.sendStatus(200);
    });
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = server;
