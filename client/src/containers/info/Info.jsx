import React from 'react';

import { Button } from '../../ui/';
import { IconDelivery, IconLocation, IconArrowLeft, IconHeart } from '../../assets/images/icons/';

import {
	Section,
	Header,
	BackButton,
	FavouriteButton,
	Main,
	Title,
	Description,
	Footer,
	Price,
	DeliveryInfo,
	HelperText,
} from './Info.styled.js';

export const Info = ({
	product,
	toggleToCart,
	toggleToFavourite,
	isInCart,
	isFavourite,
	onClickBack,
}) => {
	return (
		<Section>
			<Header>
				<BackButton onClick={onClickBack}>
					<IconArrowLeft />
					Back
				</BackButton>
				<FavouriteButton onClick={toggleToFavourite} isActive={isFavourite}>
					<IconHeart />
				</FavouriteButton>
			</Header>
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
				<Button onClick={toggleToCart} lighten={isInCart}>
					{isInCart ? 'Already in cart' : 'Add to cart'}
				</Button>
				<HelperText>Taxes and shipping fees will apply upon checkout</HelperText>
			</Footer>
		</Section>
	);
};
