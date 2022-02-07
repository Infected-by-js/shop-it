import { createSlice } from '@reduxjs/toolkit';
import { subDollars, sumDollars } from '../../../utils/handleMoney';
import { addProductToList } from '../../../utils/addProductToList';
import { removeProductFromList } from '../../../utils/removeProductFromList';

const initialState = {
	products: [],
	quantity: 0,
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.quantity += 1;
			state.totalPrice = sumDollars(state.totalPrice, action.payload.price);
			state.products = addProductToList(state.products, action.payload);
		},
		removeProduct: (state, action) => {
			state.quantity -= 1;
			state.totalPrice = subDollars(state.totalPrice, action.payload.price);
			state.products = removeProductFromList(state.products, action.payload);
		},
	},
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
