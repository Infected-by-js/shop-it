import { createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '../../../api/services/ProductService';

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async ({ category, limit }, { rejectWithValue }) => {
		try {
			const products = await ProductService.fetchAll({ category, limit });
			return products;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getOneProduct = createAsyncThunk(
	'products/getProduct',
	async (id, { rejectWithValue, getState }) => {
		try {
			const product = await ProductService.fetchOne(id);
			return product;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
