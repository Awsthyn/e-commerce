const server = require("express").Router();
const { Order } = require("../db.js");

server.post("/user/:idUser/cart", (req, res, next) => {
  const {
    userName,
    shippingAdress,
    billingAdress,
    creationDate,
    total,
  } = req.body;
  Order.create({
    userName,
    shippingAdress,
    billingAdress,
    creationDate,
    total,
  })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(next);
});

server.get("/user/:idUser/cart", (req, res, next) => {
  Order.findAll()
    .then((orders) => {
      // console.log(products);
      res.json(orders);
    })
    .catch(next);
});

server.delete("/users/:idUser/cart/", (req, res, next) => {
  try {
    const { id } = req.params;
    Order.destroyAll({ where: { id: id } }).then(() => {
      res.sendStatus(200);
    });
  } catch (error) {
    console.error(error.message);
  }
});

server.put("/users/:idUser/cart/", (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      userName,
      shippingAdress,
      billingAdress,
      creationDate,
      total,
    } = req.body;
    Order.update(
      {
        userName,
        shippingAdress,
        billingAdress,
        creationDate,
        total,
      },
      { where: { id } }
    ).then(() => {
      res.sendStatus(200);
    });
  } catch (error) {
    console.error(error.message);
  }
});

//A partir de Aca agreo Ariel

//S44
server.get("/", (req, res, next) => {
  Order.findAll({
    where: {
      orderStatus: req.query.orderStatus,
    },
  })
    .then((orders) => {
      res.json(orders);
    })
    .catch();
  {
    throw console.error("Status incorrecto");
  }
});

//S46
server.get("/:id", (req, res, next) => {
  Order.findByPk(req.params.id)
    .then((orders) => {
      res.json(orders);
    })
    .catch(next);
});

//S47
server.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const { orderStatus, shippingAdress, billingAdress, total } = req.body;
    Order.update(
      {
        orderStatus,
        shippingAdress,
        billingAdress,
        total,
      },
      { where: { id } }
    ).then(() => {
      res.sendStatus(200);
    });
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = server;
