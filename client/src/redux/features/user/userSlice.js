import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentUser: null,
	isFetching: false,
	error: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		loginFailure: (state, action) => {
			state.isFetching = false;
			state.error = action.payload;
		},
	},
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;

export default userSlice.reducer;
