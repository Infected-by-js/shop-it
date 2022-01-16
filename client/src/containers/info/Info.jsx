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

export const Info = () => {
	return (
		<Section>
			<BackButton>
				<IconArrowLeft />
				Back
			</BackButton>
			<Main>
				<Title>title (2021)</Title>
				<Description>Author</Description>
				<Description>style, size</Description>
				<Description>description</Description>
			</Main>
			<Footer>
				<Price>$620</Price>
				<DeliveryInfo>
					<IconLocation />
					<p> Ships from New York, NY, USA</p>
				</DeliveryInfo>
				<DeliveryInfo>
					<IconDelivery />
					<p>Estimated to ship in 3 - 7 days within USA</p>
				</DeliveryInfo>
				<Button>Add to cart</Button>
				<HelperText>Taxes and shipping fees will apply upon checkout</HelperText>
			</Footer>
		</Section>
	);
};
