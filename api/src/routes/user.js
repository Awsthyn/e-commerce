const server = require("express").Router();
const { User, Order } = require("../db.js");
var Sequelize = require("sequelize");
//Ariel

//S45
server.get("/:id/order/", (req, res, next) => {
  Order.findAll({ where: { userId: req.params.userId } })
    .then((userOrders) => {
      res.json(userOrders);
      console.log(userOrders);
    })
    .catch(next);
});

//Nicolás

// order.js

// S38
server.post("/:userId/cart", (req, res, next) => {
  const { id, orderStatus, shippingAdress, billingAdress, total } = req.body;
  Order.create({
    orderStatus,
    shippingAdress,
    billingAdress,
    total,
    userId: id
  })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(next);
});

//S39
server.get("/:userId/cart", (req, res, next) => {
  Order.findAll()
    .then((orders) => {
      // console.log(products);
      res.json(orders);
    })
    .catch(next);
});

//S40
server.delete("/:userId/cart", (req, res, next) => {
  try {
    const { id } = req.params;
    Order.destroy({ where: { userId: id } }).then(() => {
      res.sendStatus(200);
    });
  } catch (error) {
    console.error(error.message);
  }
});

//orderLine.js
// S41
server.put("/:userId/cart", (req, res, next) => {
  try {
    const { id } = req.params;
    const { quantity, price } = req.body;
    OrderLine.update(
      {
        quantity,
        price
      },
      { where: { id } }
    ).then(() => {
      res.sendStatus(200);
    });
  } catch (error) {
    console.error(error.message);
  }
});


//Pela

server.get("/", (req, res, next) => {
  User.findAll()
    .then((data) => {
      // console.log(products);
      res.json(data);
    })
    .catch(next);
});

server.post("/", (req, res, next) => {
  const { email, first_name, last_name, address, locality, state, password, admin } = req.body;
  User.create({
    email,
    first_name,
    last_name,
    address,
    locality,
    state,
    password,
    admin
  })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(next);
});


server.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    User.destroy({ where: { id: id } }).then(() => {
      res.sendStatus(200);
    });
  } catch (error) {
    console.error(error.message);
  }
});

server.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const { email, first_name, last_name, address, locality, state, password, admin } = req.body;
    User.update(
      {
        email,
        first_name,
        last_name,
        address,
        locality,
        state,
        password,
        admin
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
