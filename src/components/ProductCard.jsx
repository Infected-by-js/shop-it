import React from 'react';
import styled from 'styled-components';
import { color, fonts, fontWeight, TRANSION_MS } from '../styles/constants';
import { IconHeart, IconSearch, IconCart } from '../assets/images/icons/';

export const ProductCard = ({ image_src, title, style, author, price, year_created }) => {
	const handleClickAddToCart = () => {
		console.log('Add to cart');
	};
	const handleClickDetails = () => {
		console.log('Details');
	};
	const handleClickAddToFavourite = () => {
		console.log('Add to Favourite');
	};

	return (
		<Wrapper>
			<Image src={image_src} alt={title} />
			<InfoWrapp>
				<Author>{author}</Author>
				<Style>{style}</Style>
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

const Wrapper = styled.div`
	position: relative;
	width: 290px;
	display: flex;
	flex-direction: column;
	border-radius: 15px;

	border: 1px solid ${color.white};
	background-color: ${color.white};

	overflow: hidden;
	cursor: pointer;
`;

const Image = styled.img`
	width: 100%;
	height: auto;
	max-height: 400px;
	object-fit: contain;
`;

const InfoWrapp = styled.div`
	padding: 10px 25px 15px;
`;

const Author = styled.h2`
	margin-bottom: 3px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.m};
	font-size: 1.1rem;
	line-height: 1.5;
	letter-spacing: -5%;
	color: ${color.black};
`;
const Style = styled.p`
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	font-size: 0.9rem;
	line-height: 1.5;
	letter-spacing: -5%;
	color: ${color.grey};
`;

const ButtonsWrapper = styled.div`
	position: absolute;
	opacity: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;

	background-color: rgba(0, 0, 0, 0.5);

	transition: all ${TRANSION_MS} ease;

	${Wrapper}:hover &,
	${Wrapper}:focus-within & {
		opacity: 1;
	}
	border-radius: 15px;
`;

const Button = styled.button`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0.6;
	border: 0;
	border-radius: 50%;
	background-color: ${color.white};

	svg {
		width: 50%;
		height: 50%;
		fill: ${color.black};
	}

	&:hover,
	&:focus {
		opacity: 1;
	}
`;
