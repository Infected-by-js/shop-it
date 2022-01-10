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

export const CartProduct = () => {
	return (
		<Wrapper>
			<Image src='./images/img_1.jpeg' />

			<Details>
				<TextWrapp>
					<Text>ESSIE THUNDER SHOES</Text>
					<Text>by Author</Text>
					<Text>Oil paint</Text>
					<Text>30 x 25 cm</Text>
				</TextWrapp>
				<RemoveButton>Discart</RemoveButton>
			</Details>
			<Price>$30</Price>
		</Wrapper>
	);
};
