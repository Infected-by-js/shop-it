import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Image, Details, TextWrapp, Text, Price, RemoveButton } from './CartItem.styled';

export const CartItem = (props) => {
	const { id, image, title, author, style, size, price, onRemove, productLink = '/' } = props;

	const handleRemoveFromCart = () => {
		onRemove(id);
	};

	return (
		<Wrapper>
			<Image src={image} />

			<Details>
				<TextWrapp>
					<Link to={productLink}>
						<Text style={{ fontWeight: 700 }}>{title}</Text>
					</Link>
					<Text>by {author}</Text>
					<Text>{style}</Text>
					<Text>{size}</Text>
				</TextWrapp>
				<RemoveButton onClick={handleRemoveFromCart}>Discart</RemoveButton>
			</Details>
			<Price>${price}</Price>
		</Wrapper>
	);
};
