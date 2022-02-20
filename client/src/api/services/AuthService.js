import { requests } from '../requests';
import axiosInstance from '../axiosInstance';

class AuthService {
	constructor(requests) {
		this.requests = requests;
	}

	setHeadersToken(token) {
		if (token) {
			axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
		} else {
			delete axiosInstance.defaults.headers['Authorization'];
		}
	}

	async login(userCredentials) {
		const response = await this.requests.login(userCredentials);
		const token = response.data.accessToken;

		this.setHeadersToken(token);
		return response.data;
	}

	async register(userCredentials) {
		const response = await this.requests.register(userCredentials);
		return response.data;
	}
}

export default new AuthService(requests);
