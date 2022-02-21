const router = require('express').Router();
const AuthController = require('../controllers/AuthController');
const { registerValidators, loginValidators } = require('../utils/validators');
const verifyToken = require('../middlewares/verifyToken');

router.post('/register', registerValidators, AuthController.register);
router.post('/login', loginValidators, AuthController.login);
router.get('/', verifyToken, AuthController.auth);

module.exports = router;
