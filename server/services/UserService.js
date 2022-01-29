const User = require('../models/User');

class UserService {
	async getUser(username) {
		const user = await User.findOne({ username });

		if (!user) {
			throw 'User not found!';
		}

		return user;
	}

	async createUser(candidate) {
		const user = await User.findOne({ username: candidate.username });

		if (user) {
			throw 'User already exist!';
		}

		const newUser = new User(candidate);
		return newUser.save();
	}
}

module.exports = new UserService();
