import { requests } from '../requests';
import axiosInstance from '../axiosInstance';
import StorageService from '../services/StorageService';

class AuthService {
	constructor(requests) {
		this.requests = requests;
	}

	setHeadersToken(token) {
		if (token) {
			axiosInstance.defaults.headers.common['x-access-token'] = `Bearer ${token}`;
		} else {
			delete axiosInstance.defaults.headers.common['Authorization'];
		}
	}

	async login(userCredentials) {
		const response = await this.requests.login(userCredentials);
		const token = response.data.accessToken;

		StorageService.saveItem('token', token);

		this.setHeadersToken(token);
		return response.data;
	}

	async register(userCredentials) {
		const response = await this.requests.register(userCredentials);
		const token = response.data.accessToken;

		StorageService.saveItem('token', token);

		this.setHeadersToken(token);
		return response.data;
	}

	async requestAuth(token) {
		this.setHeadersToken(token);

		const response = await this.requests.auth();
		return response.data;
	}

	logout() {
		this.setHeadersToken();
		StorageService.deleteItem('token');
	}
}

export default new AuthService(requests);
