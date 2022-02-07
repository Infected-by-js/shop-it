import React from 'react';

import { Wrapp, Image, Content, Title, Author, Price } from './SearchItem.styled';

export const SearchItem = ({ onRouteToProductPage, product }) => {
	const handleRouteToProductPage = () => {
		onRouteToProductPage(product);
	};
	return (
		<Wrapp key={product.id} onClick={handleRouteToProductPage}>
			<Image src={product.images[0]} />
			<Content>
				<Title>{product.title}</Title>
				<Author>{product.author}</Author>
				<Price>${product.price}</Price>
			</Content>
		</Wrapp>
	);
};
