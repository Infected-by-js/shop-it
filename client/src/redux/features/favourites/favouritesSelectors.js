export const favouritesSelector = (state) => state.favourites;
export const favouriteProductsSelector = (state) => favouritesSelector(state).products;
