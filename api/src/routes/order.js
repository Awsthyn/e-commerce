const server = require("express").Router();
const { Order } = require("../db.js");

// server.post("/:id/cart", (req, res, next) => {
//   const { orderStatus, shippingAdress, billingAdress, total } = req.body;
//   Order.create({
//     orderStatus,
//     shippingAdress,
//     billingAdress,
//     total
//   })
//     .then(() => {
//       res.sendStatus(201);
//     })
//     .catch(next);
// });

// server.get("/:id/cart", (req, res, next) => {
//   Order.findAll()
//     .then((orders) => {
//       // console.log(products);
//       res.json(orders);
//     })
//     .catch(next);
// });


// server.delete("/:id/cart", (req, res, next) => {
//   try {
//     const { id } = req.params;
//     Order.destroy({ where: { id: id } }).then(() => {
//       res.sendStatus(200);
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// server.put("/:id/cart", (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { orderStatus, shippingAdress, billingAdress, total } = req.body;
//     Order.update(
//       {
//         orderStatus,
//         shippingAdress,
//         billingAdress,
//         total
//       },
//       { where: { id } }
//     ).then(() => {
//       res.sendStatus(200);
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// });

module.exports = server;