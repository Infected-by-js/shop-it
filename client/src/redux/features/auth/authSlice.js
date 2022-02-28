import { createSlice, isRejectedWithValue, isPending, isFulfilled } from '@reduxjs/toolkit';
import { registerUser, loginUser, logOutUser, requestAuth } from './authActions';

const initialState = {
	isAuth: false,
	currentUser: null,
	isLoading: false,
	authError: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: ({ addCase, addMatcher }) => {
		addCase(logOutUser, (state) => {
			state.currentUser = null;
			state.isAuth = false;
		});
		addMatcher(isPending(registerUser, loginUser, requestAuth), (state) => {
			state.isLoading = true;
			state.currentUser = null;
			state.authError = false;
			state.isAuth = false;
		});
		addMatcher(isFulfilled(registerUser, loginUser, requestAuth), (state, action) => {
			state.isLoading = false;
			state.currentUser = action.payload;
			state.isAuth = true;
		});
		addMatcher(isRejectedWithValue(registerUser, loginUser), (state, action) => {
			state.isLoading = false;
			state.authError = action.payload;
		});
	},
});

export default authSlice.reducer;
