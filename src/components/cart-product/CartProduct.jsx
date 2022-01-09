import React from 'react';

import {
	Wrapper,
	Image,
	Info,
	Details,
	Text,
	PriceWrapp,
	Price,
	RemoveButton,
} from './CartProduct.styled';

export const CartProduct = () => {
	return (
		<Wrapper>
			<Image src='./images/img_1.jpeg' />
			<Info>
				<Details>
					<Text>
						<b>Title: </b> ESSIE THUNDER SHOES
					</Text>
					<Text>
						<b>Author: </b> Author
					</Text>
					<Text>
						<b>Size: </b> 25x25cm
					</Text>
					<Text>
						<b>Style: </b> Oil paint
					</Text>
				</Details>
				<PriceWrapp>
					<Price>$30</Price>
					<RemoveButton>Discart</RemoveButton>
				</PriceWrapp>
			</Info>
		</Wrapper>
	);
};
