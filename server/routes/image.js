const router = require('express').Router();
const FileController = require('../controllers/FileController');

router.get('/:id', FileController.getOne);

module.exports = router;
