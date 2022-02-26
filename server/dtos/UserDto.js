class UserDto {
	constructor(userData) {
		this.id = userData._id;
		this.email = userData.email;
		this.username = userData.username;
	}
}

module.exports = UserDto;
