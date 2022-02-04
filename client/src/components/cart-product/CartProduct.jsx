import React from 'react';
import { Link } from 'react-router-dom';
import { routeToProductPage } from '../../router/routes';

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
			<Image src={product.images[0]} />

			<Details>
				<TextWrapp>
					<Link to={routeToProductPage(product.id)}>
						<Text style={{ fontWeight: 700 }}>{product.title}</Text>
					</Link>
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
