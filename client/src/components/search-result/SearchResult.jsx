import React from 'react';
import { SearchItem } from '../';
import { Wrapp, EmptyState } from './SearchResult.styled';

export const SearchResult = ({ value, products, onRouteToProductPage }) => {
	if (!products.length) {
		return <EmptyState>No results to: "{value}"</EmptyState>;
	}

	return (
		<Wrapp>
			{products.map((product) => (
				<SearchItem
					key={product.id}
					product={product}
					onRouteToProductPage={onRouteToProductPage}
				/>
			))}
		</Wrapp>
	);
};
