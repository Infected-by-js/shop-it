import React from 'react';

import {
	Wrapper,
	Image,
	Details,
	TextWrapp,
	Text,
	Price,
	RemoveButton,
} from './CartProduct.styled';

export const CartProduct = ({ product, removeProduct }) => {
	return (
		<Wrapper>
			<Image src={product.image_set[0]} />

			<Details>
				<TextWrapp>
					<Text style={{ fontWeight: 700 }}>{product.title}</Text>
					<Text>by {product.author}</Text>
					<Text>{product.style}</Text>
					<Text>{product.size}</Text>
				</TextWrapp>
				<RemoveButton onClick={() => removeProduct(product)}>Discart</RemoveButton>
			</Details>
			<Price>${product.price}</Price>
		</Wrapper>
	);
};
