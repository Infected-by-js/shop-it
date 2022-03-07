import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '../../../api/services/ProductService';

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async ({ category, limit, page }, { rejectWithValue }) => {
		try {
			const products = await ProductService.fetchAll({ category, limit, page });
			return products;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getOneProduct = createAsyncThunk(
	'products/getProduct',
	async (id, { rejectWithValue }) => {
		try {
			const product = await ProductService.fetchOne(id);
			return product;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const setPage = createAction('products/setPage', (page) => {
	return { payload: page };
});

export const setCategory = createAction('products/setCategory', (category) => {
	return { payload: category };
});
