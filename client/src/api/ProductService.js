import axios from 'axios';
import { ENDPOINTS } from './endpoints';

const BASE_URL = 'http://localhost:5000/api';
const TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTJkYmI5OGI2MGE5ZWYzOWM2YWM2MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjU5MzczNCwiZXhwIjoxNjQyODUyOTM0fQ.R5-kzXGE2m--nlIaq86KP6hSj5TAIKam52tfoy6Swso';

class ProductService {
	constructor(baseUrl, endpoints, token) {
		this.baseUrl = baseUrl;
		this.endpoints = endpoints;
		this.token = token;
	}

	async fetchAll(endpoint, { category, limit }) {
		const url = this.endpoints[endpoint];

		const response = await axios.get(`${this.baseUrl}${url}`, {
			params: {
				category,
				limit,
			},
		});
		return response.data;
	}

	async fetchOne(endpoint, id) {
		const url = this.endpoints[endpoint];

		const response = await axios.get(`${this.baseUrl}${url}/find/${id}`);
		return response.data;
	}

	async createOne(endpoint, requestBody) {
		const url = this.endpoints[endpoint];

		const response = await axios.post(`${this.baseUrl}${url}`, requestBody, {
			headers: {
				token: `Bearer ${this.token}`,
			},
		});
		return response.data;
	}
}

export default new ProductService(BASE_URL, ENDPOINTS, TOKEN);
