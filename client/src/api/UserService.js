import axiosInstance from './axiosInstance';

class UserService {
	async login(userCredentials) {
		const response = await axiosInstance.post('auth/login', userCredentials);
		return response.data;
	}

	async register(userCredentials) {
		const response = await axiosInstance.post('auth/register', userCredentials);
		return response.data;
	}
}

export default new UserService();
