import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import UserService from '../../../api/services/UserService';

export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async (credentials, { rejectWithValue }) => {
		try {
			const user = await UserService.login(credentials);

			return user;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const registerUser = createAsyncThunk(
	'auth/registerUser',
	async (credentials, { rejectWithValue }) => {
		try {
			const user = await UserService.register(credentials);

			return user;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const logOutUser = createAction('auth/logout');
