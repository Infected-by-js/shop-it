export const removeProductFromListUtil = (productList, productToAdd) => {
	const isProductAreadyExist = productList.some((product) => product.id === productToAdd.id);

	return isProductAreadyExist
		? productList.filter((product) => product.id !== productToAdd.id)
		: [...productList];
};
