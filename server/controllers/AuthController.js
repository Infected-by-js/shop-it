const UserService = require('../services/UserService');
const { validationResult } = require('express-validator');

class AuthController {
	async register(req, res) {
		try {
			const { errors } = validationResult(req);

			if (errors.length) {
				return res.status(400).json(errors);
			}

			const { username, email, password } = req.body;
			const newUser = await UserService.register(username, email, password);

			res.status(201).json(newUser);
		} catch (err) {
			res.status(409).json(err);
		}
	}

	async login(req, res) {
		try {
			const { errors } = validationResult(req);

			if (errors.length) {
				return res.status(400).json(errors);
			}

			const { username, password } = req.body;
			const user = await UserService.login(username, password);

			res.status(200).json(user);
		} catch (err) {
			res.status(400).json(err);
		}
	}

	async auth(req, res) {
		try {
			const { id } = req.user[0];
			const user = await UserService.auth(id);

			res.status(200).json(user);
		} catch (err) {
			res.status(400).json(err);
		}
	}
}

module.exports = new AuthController();
