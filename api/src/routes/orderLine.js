const server = require("express").Router();
const { OrderLine, Products, Order } = require("../db.js");

// server.post("/:id/cart", (req, res, next) => {
//     const { quantity, price } = req.body;
//     OrderLine.create({
//         quantity,
//         price
//     })
//         .then(() => {
//             res.sendStatus(201);
//         })
//         .catch(next);
// });

// server.get("/:id/cart", (req, res, next) => {
//     OrderLine.findByPk(req.params.id)
//         .then((orders) => {
//             res.json(orders);
//         })
//         .catch(next);
// });


// server.delete("/:id/cart", (req, res, next) => {
//     try {
//         const { id } = req.params;
//         OrderLine.destroy({ where: { id } }).then(() => {
//             res.sendStatus(200);
//         });
//     } catch (error) {
//         console.error(error.message);
//     }
// });

// server.put("/:id/cart", (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const { quantity, price } = req.body;
//         OrderLine.update(
//             {
//                 quantity,
//                 price
//             },
//             { where: { id } }
//         ).then(() => {
//             res.sendStatus(200);
//         });
//     } catch (error) {
//         console.error(error.message);
//     }
// });


module.exports = server;

// Products.belongsToMany(Order, {through: 'order_products'})
// Order.belongsToMany(Products, {through: 'order_products'})