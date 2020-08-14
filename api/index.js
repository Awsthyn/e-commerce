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
const { conn, Product, Category, productsInCategory } = require("./src/db.js");
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
    Category.bulkCreate([
      { name: "Vestimenta", description: "Pilchas para vestirse" },
      {
        name: "Herramientas",
        description: "Artefactos que nos faciliten algún tipo de trabajo",
      },
      {
        name: "Armas",
        description:
          "Artefactos que nos faciliten algunos tipos de trabajo (no muy legales)",
      },
      {
        name: "Maquinarias",
        description: "Como una herramienta, pero más complejo, grande y caro",
      },
      { name: "Ornamental", description: "Elementos para la decoración" },
      {
        name: "Libros",
        description: "Para matar el tiempo de una forma casi productiva",
      },
      { name: "Comestibles", description: "Alimentos, ingredientes, especias" },
    ]);
  })
  .then(() => {
    Product.bulkCreate([
      {
        name: "La mano de Dios",
        description: "Golazo contra los ingleses en el 86.",
        price: 100000,
        stock: 1,
      },
      {
        name: "Croma en oferta. Ver descripción.",
        description: "Renderiza solamente en color amarillo.",
        price: 500,
        stock: 2000,
      },
      {
        name: "Poema de Lorem Ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 1000,
        stock: 20000,
      },
    ]);
  })
  .then(() => {
    productsInCategory.bulkCreate([
      { productId: 1, categoryId: 1 },
      { productId: 1, categoryId: 2 },
      { productId: 2, categoryId: 1 },
      { productId: 3, categoryId: 2 },
      { productId: 3, categoryId: 1 },
    ]);
  });
