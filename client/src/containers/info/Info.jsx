import React from 'react';

import { Button } from '../../ui/Button.jsx';
import { IconDelivery, IconLocation, IconArrowLeft } from '../../assets/images/icons/';

import {
	Section,
	BackButton,
	Main,
	Title,
	Description,
	Footer,
	Price,
	DeliveryInfo,
	HelperText,
} from './Info.styled.js';

export const Info = ({ product, addToCart }) => {
	return (
		<Section>
			<BackButton>
				<IconArrowLeft />
				Back
			</BackButton>
			<Main>
				<Title>
					{product.title} ({product.year_created})
				</Title>
				<Description>{product.author}</Description>
				<Description>
					{product.style}, {product.size}
				</Description>
				<Description>{product.description}</Description>
			</Main>
			<Footer>
				<Price>${product.price}</Price>
				<DeliveryInfo>
					<IconLocation />
					<p> Ships from New York, NY, USA</p>
				</DeliveryInfo>
				<DeliveryInfo>
					<IconDelivery />
					<p>Estimated to ship in 3 - 7 days within USA</p>
				</DeliveryInfo>
				<Button onClick={addToCart}>Add to cart</Button>
				<HelperText>Taxes and shipping fees will apply upon checkout</HelperText>
			</Footer>
		</Section>
	);
};
