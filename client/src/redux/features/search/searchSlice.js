import { createSlice } from '@reduxjs/toolkit';
import { addProductToList } from '../../../helpers/addProductToList';

const initialState = {
	products: [],
	recentSearch: [],
	inputValue: '',
	error: '',
	isLoading: false,
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		searchResultLoading: (state) => {
			state.error = '';
			state.products = [];
			state.isLoading = true;
		},
		searchResultLoaded: (state, action) => {
			state.isLoading = false;
			state.products = action.payload;
		},
		searchResultLoadingFailed: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		setRecentSearch: (state, action) => {
			state.recentSearch = addProductToList(state.recentSearch, action.payload);
		},
		clearRecentSearch: (state) => {
			state.recentSearch = [];
		},
		setInputValue: (state, action) => {
			state.inputValue = action.payload;
		},
	},
});

export const {
	searchResultLoading,
	searchResultLoaded,
	searchResultLoadingFailed,
	setRecentSearch,
	clearRecentSearch,
	setInputValue,
} = searchSlice.actions;

export default searchSlice.reducer;
