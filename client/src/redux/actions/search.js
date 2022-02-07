import ProductService from '../../api/ProductService';
import {
	searchResultLoaded,
	searchResultLoading,
	searchResultLoadingFailed,
	setRecentSearch,
	setInputValue,
} from '../features/search/searchSlice';

export const searchProducts = (inputValue) => async (dispatch) => {
	try {
		dispatch(searchResultLoading());

		const product = await ProductService.fetchAll({ query: inputValue });

		dispatch(searchResultLoaded(product));
	} catch (error) {
		dispatch(searchResultLoadingFailed(error.response.data));
	}
};

export const addToRecentSearch = (products) => {
	return setRecentSearch(products);
};

export const removeRecentSearch = () => {
	return setRecentSearch();
};

export const changeInputValue = (inputValue) => {
	return setInputValue(inputValue);
};
