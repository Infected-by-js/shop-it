import React from 'react';
import { ProductItem } from '../../components';
import { Wrapper, EmptyStateTitle } from './ProductList.styled';

export const ProductList = ({ products }) => {
	//const {products, isLoading, error } = useSelector(products => products);

	return (
		<>
			{/* error && <ErrorMessage error={error} /> */}
			{/* isLoading && Array.from({length: 4}).map((_) => <Skeleton />) */}
			{!products.length ? (
				<EmptyStateTitle>There are no products yet</EmptyStateTitle>
			) : (
				<Wrapper>
					{products.map((product) => (
						<ProductItem key={product._id} product={product} />
					))}
				</Wrapper>
			)}
		</>
	);
};
