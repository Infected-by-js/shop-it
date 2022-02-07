import { checkProductsInList } from './checkProductInList';

export const addProductToList = (productList, productToAdd) => {
	const isProductAreadyExist = checkProductsInList(productList, productToAdd);

	return isProductAreadyExist ? [...productList] : [...productList, productToAdd];
};
