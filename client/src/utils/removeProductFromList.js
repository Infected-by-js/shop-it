import { checkProductsInList } from './checkProductInList';

export const removeProductFromList = (productList, productToAdd) => {
	const isProductAreadyExist = checkProductsInList(productList, productToAdd);

	return isProductAreadyExist
		? productList.filter((product) => product.id !== productToAdd.id)
		: [...productList];
};
