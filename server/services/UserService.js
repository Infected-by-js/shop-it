const User = require('../models/User');

class UserService {
	async getOne(username) {
		const user = await User.findOne({ username });

		if (!user) {
			throw 'User not found!';
		}

		return user;
	}

	async createOne(candidate) {
		const user = await User.findOne({ username: candidate.username });

		if (user) {
			throw 'User already exist!';
		}

		const newUser = new User(candidate);
		return newUser.save();
	}
}

module.exports = new UserService();
