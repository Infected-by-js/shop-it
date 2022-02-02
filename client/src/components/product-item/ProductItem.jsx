import React, { useEffect, useState } from 'react';

import { Wrapper, Image, ButtonsWrapper, Button } from './ProductItem.styled';
import { IconHeart, IconSearch, IconCart } from '../../assets/images/icons';
import { useSelector } from 'react-redux';

export const ProductItem = ({ product, onToggleToCart, onToggleToFavourite, onClickDetails }) => {
	const favouritesProducts = useSelector(({ favourites }) => favourites.products);
	const cartProducts = useSelector(({ cart }) => cart.products);
	const [isInCart, setIsInCart] = useState(false);
	const [isFavourite, setIsFavourite] = useState(false);

	const handleToggleToCart = () => {
		setIsInCart((prev) => !prev);
		onToggleToCart(product);
	};

	const handleClickDetails = () => {
		onClickDetails(product);
	};

	const handleToggleToFavourite = () => {
		setIsFavourite((prev) => !prev);
		onToggleToFavourite(product);
	};

	useEffect(() => {
		const isAlreadyInCart = cartProducts.some((cartProduct) => cartProduct._id === product._id);
		const isAlreadyInFavourites = favouritesProducts.some(
			(favourite) => favourite._id === product._id
		);

		if (isAlreadyInCart) {
			setIsInCart(true);
		}

		if (isAlreadyInFavourites) {
			setIsFavourite(true);
		}
		/*
			

			if (product._id === productFavourite) {
				setIsFavourite(true)
			}

		
		*/
	}, []);

	return (
		<Wrapper>
			<Image src={product.images[0]} alt={product.title} />
			<ButtonsWrapper>
				<Button onClick={handleToggleToCart} isActive={isInCart}>
					<IconCart />
				</Button>
				<Button onClick={handleClickDetails}>
					<IconSearch />
				</Button>
				<Button onClick={handleToggleToFavourite} isActive={isFavourite}>
					<IconHeart />
				</Button>
			</ButtonsWrapper>
		</Wrapper>
	);
};
