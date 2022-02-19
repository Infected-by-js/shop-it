export const checkProductsInList = (productList, productToCheck) => {
	return productList.some((product) => product.id === productToCheck.id);
};
