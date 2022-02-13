import { requests } from '../requests';

class UserService {
	constructor(requests) {
		this.requests = requests;
	}
	async login(userCredentials) {
		const response = await this.requests.login(userCredentials);
		return response.data;
	}

	async register(userCredentials) {
		const response = await this.requests.register(userCredentials);
		return response.data;
	}
}

export default new UserService(requests);
