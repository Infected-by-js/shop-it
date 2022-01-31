import React from 'react';
import { ProductItem } from '../../components';
import { Wrapper } from './ProductList.styled';

export const ProductList = ({ products }) => {
	return (
		<Wrapper>
			{products.map((product) => (
				<ProductItem key={product._id} product={product} />
			))}
		</Wrapper>
	);
};
