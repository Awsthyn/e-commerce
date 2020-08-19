const server = require("express").Router();
const { User, Order } = require("../db.js");
var Sequelize = require("sequelize");
//Ariel

//S45
server.get("/:userId/order/", (req, res, next) => {
  Order.findAll({ where: { userId: req.params.userId } })
    .then((userOrders) => {
      res.json(userOrders);
      console.log(userOrders);
    })
    .catch(next);
});

//Nicolás

//Pela

module.exports = server;
