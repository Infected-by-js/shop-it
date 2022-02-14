import { createSlice } from '@reduxjs/toolkit';
import { subDollars, sumDollars } from '../../../utils/handleMoney';
import { checkProductsInList } from '../../../utils/checkProductInList';

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
			const isAlreadyInCart = checkProductsInList(state.products, action.payload);

			if (!isAlreadyInCart) {
				state.quantity += 1;
				state.totalPrice = sumDollars(state.totalPrice, action.payload.price);
				state.products.push(action.payload);
			}
		},
		removeProduct: (state, action) => {
			const isAlreadyInCart = checkProductsInList(state.products, action.payload);

			if (isAlreadyInCart) {
				state.quantity -= 1;
				state.totalPrice = subDollars(state.totalPrice, action.payload.price);
				state.products = state.products.filter((product) => product.id !== action.payload.id);
			}
		},
	},
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
