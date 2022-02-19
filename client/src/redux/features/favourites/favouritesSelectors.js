export const favouritesSelector = (state) => state.favourites;
export const favouriteProductsSelector = (state) => favouritesSelector(state).products;
export const favouriteQuantitySelector = (state) => favouritesSelector(state).quantity;
