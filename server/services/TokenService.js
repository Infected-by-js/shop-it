const jwt = require('jsonwebtoken');

class TokenService {
	createAccessToken(...payload) {
		return jwt.sign({ ...payload }, process.env.JWT_SEC, { expiresIn: '1d' });
	}
}

module.exports = new TokenService();
