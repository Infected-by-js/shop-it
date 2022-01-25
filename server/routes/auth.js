const router = require('express').Router();
const AuthController = require('../controllers/AuthController');
const { registerValidators, loginValidators } = require('../utils/validators');

router.post('/register', registerValidators, AuthController.register);
router.post('/login', loginValidators, AuthController.login);

module.exports = router;
