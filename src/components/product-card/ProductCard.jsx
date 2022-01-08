import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './ProductCard.styled';
import { IconHeart, IconSearch, IconCart } from '../../assets/images/icons/';

export const ProductCard = ({ id, image_src, title, style, author }) => {
	const navigate = useNavigate();

	const handleClickAddToCart = () => {
		console.log('Add to cart');
	};
	const handleClickDetails = () => {
		navigate(`/${id}`);
	};
	const handleClickAddToFavourite = () => {
		console.log('Add to Favourite');
	};

	return (
		<Styled.ProductCard>
			<Styled.Image src={image_src} alt={title} />
			<Styled.InfoWrapp>
				<Styled.Author>{author}</Styled.Author>
				<Styled.Style>{style}</Styled.Style>
			</Styled.InfoWrapp>
			<Styled.ButtonsWrapper>
				<Styled.Button onClick={handleClickAddToCart}>
					<IconCart />
				</Styled.Button>
				<Styled.Button onClick={handleClickDetails}>
					<IconSearch />
				</Styled.Button>
				<Styled.Button onClick={handleClickAddToFavourite}>
					<IconHeart />
				</Styled.Button>
			</Styled.ButtonsWrapper>
		</Styled.ProductCard>
	);
};
