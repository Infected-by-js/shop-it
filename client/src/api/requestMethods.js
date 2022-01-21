import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
const TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTJkYmI5OGI2MGE5ZWYzOWM2YWM2MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjU5MzczNCwiZXhwIjoxNjQyODUyOTM0fQ.R5-kzXGE2m--nlIaq86KP6hSj5TAIKam52tfoy6Swso';

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: {
		token: `Bearer ${TOKEN}`,
	},
});
