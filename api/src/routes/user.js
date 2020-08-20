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
server.post("/:id/cart", (req, res, next) => {
  const { orderStatus, shippingAdress, billingAdress, total } = req.body;
  Order.create({
    orderStatus,
    shippingAdress,
    billingAdress,
    total
  })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(next);
});

//S39
server.get("/:id/cart", (req, res, next) => {
  Order.findAll()
    .then((orders) => {
      // console.log(products);
      res.json(orders);
    })
    .catch(next);
});

//S40
server.delete("/:id/cart", (req, res, next) => {
  try {
    const { id } = req.params;
    Order.destroy({ where: { id: id } }).then(() => {
      res.sendStatus(200);
    });
  } catch (error) {
    console.error(error.message);
  }
});

//orderLine.js
// S41
server.put("/:id/cart", (req, res, next) => {
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

module.exports = server;
