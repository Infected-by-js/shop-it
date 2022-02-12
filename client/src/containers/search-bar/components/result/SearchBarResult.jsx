import React from 'react';
import {
	Wrapp,
	EmptyState,
	ResultItem,
	Image,
	ItemContent,
	Title,
	Author,
	Price,
} from './SearchBarResult.styled';

export const SearchBarResult = ({ value, products, onRouteToProductPage }) => {
	if (!products.length) {
		return <EmptyState>No results to: "{value}"</EmptyState>;
	}

	return (
		<Wrapp>
			{products.map((product) => (
				<ResultItem key={product.id} onClick={() => onRouteToProductPage(product)}>
					<Image src={product.images[0]} />
					<ItemContent>
						<Title>{product.title}</Title>
						<Author>{product.author}</Author>
						<Price>${product.price}</Price>
					</ItemContent>
				</ResultItem>
			))}
		</Wrapp>
	);
};
