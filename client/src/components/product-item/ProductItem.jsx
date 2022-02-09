import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
	addToCart,
	removeFromCart,
	addToFavourites,
	removeFromFavourites,
} from '../../redux/actions';
import { cartProductsSelector, favouritesSelector } from '../../redux/selectors';
import { routeToProductPage } from '../../router/routes';
import { checkProductsInList } from '../../utils/checkProductInList';

import { IconHeart, IconSearch, IconCart } from '../../assets/images/icons';
import { Wrapper, Image, ButtonsWrapper, Button } from './ProductItem.styled';

export const ProductItem = ({ product }) => {
	const cartProducts = useSelector(cartProductsSelector);
	const favourites = useSelector(favouritesSelector);
	const [isInCart, setIsInCart] = useState(false);
	const [isFavourite, setIsFavourite] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleToggleToCart = () => {
		if (isInCart) {
			dispatch(removeFromCart(product));
		} else {
			dispatch(addToCart(product));
		}
		setIsInCart((prev) => !prev);
	};

	const handleClickDetails = () => {
		navigate(routeToProductPage(product.id));
	};

	const handleToggleToFavourite = () => {
		if (isFavourite) {
			dispatch(removeFromFavourites(product));
		} else {
			dispatch(addToFavourites(product));
		}

		setIsFavourite((prev) => !prev);
	};

	useEffect(() => {
		const isAlreadyInCart = checkProductsInList(cartProducts, product);
		const isAlreadyProductsInFavourites = checkProductsInList(favourites, product);

		isAlreadyInCart && setIsInCart(true);
		isAlreadyProductsInFavourites && setIsFavourite(true);
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
