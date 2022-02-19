import { createSlice, isFulfilled, isRejectedWithValue, isPending } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './authActions';

const initialState = {
	currentUser: null,
	isFetching: false,
	error: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: ({ addCase, addMatcher }) => {
		addMatcher(isPending(registerUser, loginUser), (state, action) => {
			state.isFetching = true;
			state.currentUser = null;
			state.error = false;
		});
		addMatcher(isFulfilled(registerUser, loginUser), (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		});
		addMatcher(isRejectedWithValue(registerUser, loginUser), (state, action) => {
			state.isFetching = false;
			state.error = action.payload;
		});
	},
});

export default authSlice.reducer;
