export const addProductToListUtil = (productList, productToAdd) => {
	const isProductAreadyExist = productList.some((product) => product.id === productToAdd.id);

	return isProductAreadyExist ? [...productList] : [...productList, productToAdd];
};
