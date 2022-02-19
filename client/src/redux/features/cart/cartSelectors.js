export const cartSelector = (state) => state.cart;
export const cartProductsSelector = (state) => cartSelector(state).products;
export const cartQuantitySelector = (state) => cartSelector(state).quantity;
