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

server.post("/", (req, res,next) =>{
	let {name, description, price, stock, image, category} = req.body
	image === '' ? image = "botas" : null;

    const categories = category // Viene del cliente como category pero sería mejor si dijera categories
    Product.create({
			name: name,
			description: description,
			price: price,
			stock: stock,
			images: [{url: image },{url: image+2},{url: image+3}]
        })
    .then(product => categories.forEach(categoryId => {
            Category.findByPk(categoryId)
            .then(category => product.addCategory(category))
        }))
    .then(() => res.sendStatus(201))
    .catch(next)
})


/*server.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock, image, category } = req.body;
    const categories = category;
    Product.findByPk(id , { include: [Category] } )
    .then(product => {

        product.removeCategories(product.categories)
        .then( () => {
            console.log('catef', categories)

            categories.forEach(category => {
                if(category.id){
                    Category.findByPk(category.id)
                    .then(c => product.addCategory(c))
                }else{
                    Category.findByPk(category)
                    .then(c => product.addCategory(c))

                }
            })

            res.sendStatus(200)
          })

        }).catch(next);
    Product.update(
      {
        name,
        description,
        price,
        stock,
      },
      { where: { id } }
  ).then((product) => {
      console.info("Producto actualizado ", product)
      res.sendStatus(200);
  });
  } catch (error) {
    console.error(error.message);
  }
}*/

    server.put("/:id", (req, res, next) => {
    const { id } = req.params;
    const { name, description, price, stock, image ,category } = req.body;
    Product.findAll({ include: [Category, Image] })
      .then((product) => {
          product.map(i => setCategory(i.dataValues.name))
        Product.update(
          {
            name,
            description,
            price,
            stock,
            category
          },
          { where: { id } }
        ).then(() => {
          res.sendStatus(200);
        });
    }).catch(next)
    console.error("Error al actualizar los datos")

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
