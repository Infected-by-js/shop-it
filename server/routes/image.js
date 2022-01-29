const router = require('express').Router();
const ImageController = require('../controllers/ImageController.js');

router.get('/:id', ImageController.getOne);

module.exports = router;
