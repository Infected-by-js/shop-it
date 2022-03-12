const router = require('express').Router();

const ProductController = require('../controllers/ProductController');

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getOne);

module.exports = router;
