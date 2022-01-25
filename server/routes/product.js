const router = require('express').Router();
const ProductController = require('../controllers/ProductController');
const Product = require('../models/Product');
const verifyToken = require('../utils/verifyToken');

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getOne);
router.post('/', verifyToken, ProductController.create);

module.exports = router;
