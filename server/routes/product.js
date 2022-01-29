const router = require('express').Router();

const ProductController = require('../controllers/ProductController');
const verifyToken = require('../middlewares/verifyToken');
const uploadImages = require('../middlewares/uploadImage');
const { saveProductValidators } = require('../utils/validators');

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getOne);
router.post('/', verifyToken, uploadImages, saveProductValidators, ProductController.create);

module.exports = router;
