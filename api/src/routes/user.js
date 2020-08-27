const server = require("express").Router();
const { User, Order, OrderLine, Product } = require("../db.js");
var Sequelize = require("sequelize");
//Ariel

//S45
server.get("/:id/order/", (req, res, next) => {
  Order.findAll({ where: { userId: req.params.userId }, include: Product })
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
const { total, productId, quantity, price } = req.body;
const order = Order.findOrCreate({where: {
  orderStatus: 'carrito',
  userId: req.params.userId}})
const product = Product.findByPk(productId);

Promise.all([order, product])
.then(data => {
  const order = data[0]
  const product = data[1]
  OrderLine.create({
    productId,
    price: product.price,
    quantity,
    orderId: order[0].id
  })
  res.status(201)
  res.json({order: order[0].id, price: product.price, quantity, product })
}).catch(err => console.log(err))

})

//S39
server.get("/:userId/cart", (req, res, next) => {
  Order.findOne({where: {
    userId: req.params.userId,
    orderStatus: 'carrito'
  }, include: { all: true, nested: true } })
    .then((orders) => {
      // console.log(products);
      res.json(orders.orderLines);
    })
    .catch(next);
});

//S40
server.delete("/:userId/cart", (req, res, next) => {
  try {
    const { userId } = req.params;
    Order.destroy({ where: { userId, orderStatus: 'carrito' } }).then(() => {
    })
    .then((data)=>{
    Order.create({
      userId,
      orderStatus: "carrito"
    })
    .then(data => {
      res.status(200)
      res.json([])
    })
    })

  } catch (error) {
    console.error(error.message);
  }
});

server.put("/:userId/cart/completo", (req, res, next) => {
  try {
    const { total } = req.body;
    console.log(total)
    Order.update(
      {
        total,
        orderStatus: "completa"
      },
      { where: { userId: req.params.userId, orderStatus: "carrito" } }
    ).then((data) => {
      console.log(data)
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
    const { id, quantity } = req.body;
    console.log(quantity)
    OrderLine.update(
      {
        quantity
      },
      { where: { id } }
    ).then((data) => {
      console.log(data)
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
    User.destroy({ where: { id } }).then(() => {
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

//S67

server.post("/auth/promote/:id", (req, res, next) => {
  const { id } = req.params;

  User.update({
    admin: true
  },
  { where: { id } })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
        console.error(`Error a promocionar usuario ${id}`)
        next()
    });
});


module.exports = server;
