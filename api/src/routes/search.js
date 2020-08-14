const server = require('express').Router();
const { Product } = require('../db.js');

server.get(`/?palabra=${valor}`, (req, res, next) => {     // --> en airTable dice que pasemos por query, como?
	Product.findAll({
        where: {
          name: {
            [Sequelize.Op.iLike]: req.query.palabra
          },
          description: {
            
          }
        }
      })
      .then(products => {
          res.json(products);
        })

        .catch(next); '/:asd' 
});