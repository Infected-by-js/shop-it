import React from 'react';
import { EmptyState, Wrapp, Title, Content, Image } from './SearchBarRecent.styled';

export const SearchBarRecent = ({ recentProducts, onRouteToProductPage }) => {
	if (!recentProducts.length) {
		return <EmptyState>No recent searches</EmptyState>;
	}

	return (
		<Wrapp>
			<Title>Recent Searches:</Title>
			<Content>
				{recentProducts.map((product) => (
					<Image
						key={product.id}
						src={product.images[0]}
						onClick={() => onRouteToProductPage(product)}
					/>
				))}
			</Content>
		</Wrapp>
	);
};