import { createSlice, isRejectedWithValue, isPending, isFulfilled } from '@reduxjs/toolkit';
import { registerUser, loginUser, logOutUser } from './authActions';

const initialState = {
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
		});
		addMatcher(isPending(registerUser, loginUser), (state) => {
			state.isLoading = true;
			state.currentUser = null;
			state.authError = false;
		});
		addMatcher(isFulfilled(registerUser, loginUser), (state, action) => {
			state.isLoading = false;
			state.currentUser = action.payload;
		});
		addMatcher(isRejectedWithValue(registerUser, loginUser), (state, action) => {
			state.isLoading = false;
			state.authError = action.payload;
		});
	},
});

export default authSlice.reducer;
