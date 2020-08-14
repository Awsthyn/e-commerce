const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');
const searchRouter = require('./search.js');
const bodyParser = require('body-parser');
const categoryRouter = require('./category.js')


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use(bodyParser.json());
router.use('/products', productRouter);
router.use('/categories', categoryRouter);
router.use('/search', searchRouter);

module.exports = router;
