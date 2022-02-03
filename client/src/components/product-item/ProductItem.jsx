import React, { useEffect, useState } from 'react';

import { Wrapper, Image, ButtonsWrapper, Button } from './ProductItem.styled';
import { IconHeart, IconSearch, IconCart } from '../../assets/images/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../../redux/actions/favourites';

const checkDublicates = (products, checkingProduct) => {
	return products.some((product) => product.id === checkingProduct.id);
};

export const ProductItem = ({ product }) => {
	const favouritesProducts = useSelector(({ favourites }) => favourites.products);
	const cartProducts = useSelector(({ cart }) => cart.products);
	const [isInCart, setIsInCart] = useState(false);
	const [isFavourite, setIsFavourite] = useState(false);
	const dispatch = useDispatch();

	const handleToggleToCart = () => {
		setIsInCart((prev) => !prev);
	};

	const handleClickDetails = () => {};

	const handleToggleToFavourite = () => {
		if (isFavourite) {
			dispatch(removeFromFavourites(product));
		} else {
			dispatch(addToFavourites(product));
		}

		setIsFavourite((prev) => !prev);
	};

	useEffect(() => {}, []);

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
