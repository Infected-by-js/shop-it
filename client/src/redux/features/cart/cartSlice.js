import { createSlice } from '@reduxjs/toolkit';
import { subDollars, sumDollars } from '../../../helpers/handleMoney';
import { checkProductsInList } from '../../../helpers/checkProductInList';
import { addToCart, removeFromCart } from './cartActions';

const initialState = {
	products: [],
	quantity: 0,
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	extraReducers: ({ addCase }) => {
		addCase(addToCart, (state, action) => {
			const isAlreadyInCart = checkProductsInList(state.products, action.payload);

			if (!isAlreadyInCart) {
				state.quantity += 1;
				state.totalPrice = sumDollars(state.totalPrice, action.payload.price);
				state.products.push(action.payload);
			}
		});

		addCase(removeFromCart, (state, action) => {
			const isAlreadyInCart = checkProductsInList(state.products, action.payload);

			if (isAlreadyInCart) {
				state.quantity -= 1;
				state.totalPrice = subDollars(state.totalPrice, action.payload.price);
				state.products = state.products.filter((product) => product.id !== action.payload.id);
			}
		});
	},
});

export default cartSlice.reducer;
