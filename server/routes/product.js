const router = require('express').Router();

const { saveProductValidators } = require('../utils/validators');
const ProductController = require('../controllers/ProductController');
const verifyToken = require('../middlewares/verifyToken');
const upload = require('../middlewares/uploadImage');

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getOne);
router.get('/images/:id', ProductController.getImage);
router.post(
	'/',
	verifyToken,
	upload.array('images'),
	saveProductValidators,
	ProductController.create
);

module.exports = router;
