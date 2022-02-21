const CryptoJS = require('crypto-js');
const User = require('../models/User');
const UserDto = require('../dtos/UserDto');
const TokenService = require('../services/TokenService');

class UserService {
	async auth(userId) {
		const user = await User.findById(userId);

		if (!user) {
			throw 'User not found!';
		}

		const userDto = new UserDto(user);
		const accessToken = TokenService.createAccessToken(userDto);

		return {
			...userDto,
			accessToken,
		};
	}

	async login(username, password) {
		const user = await User.findOne({ username });

		if (!user) {
			throw 'User not found!';
		}

		const encryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
		const originalPassword = encryptedPassword.toString(CryptoJS.enc.Utf8);

		if (originalPassword !== password) {
			throw 'Incorrect password!';
		}

		const userDto = new UserDto(user);
		const accessToken = TokenService.createAccessToken(userDto);

		return {
			...userDto,
			accessToken,
		};
	}

	async register(username, email, password) {
		const candidate = await User.findOne({ $or: [{ username }, { email }] });

		if (candidate) {
			throw 'User already exist!';
		}

		const encriptedPassword = CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString();

		const createdUser = await User.create({ username, email, password: encriptedPassword });
		const userDto = new UserDto(createdUser);
		const accessToken = TokenService.createAccessToken(userDto);

		return {
			...userDto,
			accessToken,
		};
	}
}

module.exports = new UserService();
