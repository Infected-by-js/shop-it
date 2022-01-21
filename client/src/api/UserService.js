import axiosInstance from './axiosInstance';
import { ENDPOINTS } from './endpoints';

class UserService {
	constructor(endpoints) {
		this.endpoints = endpoints;
	}

	async login(endpoint, requestBody) {
		const url = this.endpoints[endpoint];

		const response = await axiosInstance.post(`${url}`, requestBody);
		return response.data;
	}

	register() {}
}

export default new UserService(ENDPOINTS);
