import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/products';

import { ProductItem, ProductItemSkeleton } from '../../components';
import { Wrapper, EmptyStateTitle } from './ProductList.styled';

export const ProductList = ({ category = '', limit = 8 }) => {
	const { products, isLoading, error } = useSelector(({ products }) => products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts({ category, limit }));
	}, [category, limit]);

	if (isLoading) {
		const emptyArray = Array.from({ length: 4 });
		return (
			<Wrapper>
				{emptyArray.map((_, index) => (
					<ProductItemSkeleton key={index} />
				))}
			</Wrapper>
		);
	}

	return !products.length ? (
		<EmptyStateTitle>There will be products soon!</EmptyStateTitle>
	) : (
		<Wrapper>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</Wrapper>
	);
};
