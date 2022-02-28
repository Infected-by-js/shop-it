import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import UserService from '../../../api/services/AuthService';

export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async (credentials, { rejectWithValue }) => {
		try {
			const user = await UserService.login(credentials);
			const { accessToken, ...restUserCredentials } = user;

			return restUserCredentials;
		} catch (error) {
			console.log(error.response);

			return rejectWithValue(error.response.data);
		}
	}
);

export const registerUser = createAsyncThunk(
	'auth/registerUser',
	async (credentials, { rejectWithValue }) => {
		try {
			const user = await UserService.register(credentials);
			const { accessToken, ...restUserCredentials } = user;

			return restUserCredentials;
		} catch (error) {
			console.log(error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const requestAuth = createAsyncThunk('auth/requestAuth', async (token) => {
	try {
		const user = await UserService.requestAuth(token);
		const { accessToken, ...restUserCredentials } = user;

		return restUserCredentials;
	} catch (error) {
		console.log(error.response.data);
	}
});

export const logOutUser = createAction('auth/logout', () => {
	UserService.logout();
	return {};
});
