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

server.post("/", (req, res, next) => {
  const { name, description, price, stock, image } = req.body;
  Product.create({
    name: name,
    description: description,
    price: price,
    stock: stock,
  })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(next);
});

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
