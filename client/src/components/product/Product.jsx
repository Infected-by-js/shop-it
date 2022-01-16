import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
	Wrapper,
	Image,
	InfoWrapp,
	Title,
	Description,
	ButtonsWrapper,
	Button,
} from './Product.styled';
import { IconHeart, IconSearch, IconCart } from '../../assets/images/icons';
import { routeToDetailsPage } from '../../router/routes';

export const Product = ({ id, image_src, title, category, style, author }) => {
	const navigate = useNavigate();

	const handleClickAddToCart = () => {
		console.log('Add to cart');
	};
	const handleClickDetails = () => {
		navigate(routeToDetailsPage(id), {});
	};
	const handleClickAddToFavourite = () => {
		console.log('Add to Favourite');
	};

	return (
		<Wrapper>
			<Image src={image_src} alt={title} />
			<InfoWrapp>
				<Title>{author}</Title>
				<Description>{style}</Description>
			</InfoWrapp>
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
