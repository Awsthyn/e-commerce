//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const {
  conn,
  Product,
  Category,
  productsInCategory,
  Image,
  User,
  Order,
} = require("./src/db.js");
const {
  initialCategories,
  initialProducts,
  imageUrls,
  prodXCat,
} = require("./src/seed.js");
//const Category = require("./src/models/Category.js");
// Syncing all the models at once.
conn
  .sync({ force: true })
  .then(() => {
    server.listen(3001, () => {
      console.log("%s listening at 3001"); // eslint-disable-line no-console
    });
  })
  .then(() => {
    Category.bulkCreate(initialCategories);
  })
  .then(() => {
    Product.bulkCreate(initialProducts);
  })
  .then(() => {
    productsInCategory.bulkCreate(prodXCat);
  })
  .then(() => {
    Image.bulkCreate(imageUrls);
  })
  .then(() => {
    User.create({
      email: "nico@darkmarket.com",
      first_name: "Nicolás",
      last_name: "Selicki",
      address: "San Martín 123",
      locality: "La Plata",
      state: "Argentina",
      password: "Marti te amo",
      admin: true,
    });
  })
  .then(() => {
    Order.create({
      orderStatus: "carrito",
      shippingAdress: "San Martin 123",
      billingAdress: "San Martín 123",
      userId: 1,
    });
  })
  .then(() => {
    Order.create({
      orderStatus: "procesando",
      shippingAdress: "San Martin 1234",
      billingAdress: "San Martín 1234",
      userId: 1,
    });
  });
