import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Wrapper, Image, ButtonsWrapper, Button } from './ProductItem.styled';
import { IconHeart, IconSearch, IconCart } from '../../assets/images/icons';
import { routeToDetailsPage } from '../../router/routes';

export const ProductItem = ({ id, image_set, title }) => {
	const navigate = useNavigate();

	const handleClickAddToCart = () => {
		console.log('Add to cart');
	};
	const handleClickDetails = () => {
		navigate(routeToDetailsPage(id));
	};
	const handleClickAddToFavourite = () => {
		console.log('Add to Favourite');
	};

	return (
		<Wrapper>
			<Image src={image_set[0]} alt={title} />
			<ButtonsWrapper>
				<Button onClick={handleClickAddToCart}>
					<IconCart />
				</Button>
				<Button onClick={handleClickDetails}>
					<IconSearch />
				</Button>
				<Button onClick={handleClickAddToFavourite}>
					<IconHeart />
				</Button>
			</ButtonsWrapper>
		</Wrapper>
	);
};
