import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/products';

import { ProductItem } from '../../components';
import { Wrapper } from './ProductList.styled';

export const ProductList = ({ category = '', limit = 8 }) => {
	const { products, isLoading, error } = useSelector(({ products }) => products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts({ category, limit }));
	}, [category, limit]);

	return (
		<Wrapper>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</Wrapper>
	);
};
