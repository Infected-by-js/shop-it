import ProductService from '../../api/ProductService';
import {
	productsLoading,
	productsLoaded,
	activeProductLoaded,
	productsLoadingFailed,
} from '../features/products/productsSlice';

export const getProducts = ({ category, limit } = {}) => {
	return async (dispatch) => {
		try {
			dispatch(productsLoading());

			const products = await ProductService.fetchAll({ category, limit });

			dispatch(productsLoaded(products));
		} catch (error) {
			dispatch(productsLoadingFailed(error.response.data));
		}
	};
};

export const getOneProduct = (id) => {
	return async (dispatch) => {
		try {
			dispatch(productsLoading());

			const product = await ProductService.fetchOne(id);

			dispatch(activeProductLoaded(product));
		} catch (error) {
			dispatch(productsLoadingFailed(error.response.data));
		}
	};
};
