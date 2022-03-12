import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FiShoppingBag, FiSearch, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';

import {
	addToCart,
	addToFavourites,
	removeFromCart,
	removeFromFavourites,
} from '../../../../redux/actions';

import { LOGIN_PAGE_ROUTE, routeToProductPage } from '../../../../router/routes';
import { productCardAnimation } from '../../../../helpers/motions-utils';
import { ButtonAnimated } from '../../../../shared';
import { ProductCardSkeleton } from './ProductCardSkeleton';

import { Wrapper, Image, ButtonsWrapper } from './ProductCard.styled';

export const ProductCard = (props) => {
	const { product, image, index, isAuth, checkIsInCart, checkIsFavourite } = props;
	const [isInCart, setIsInCart] = useState(false);
	const [isFavourite, setIsFavourite] = useState(false);
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleToggleToCart = () => {
		// FIXME: change to info popup with link - you need to login before
		if (!isAuth) return navigate(LOGIN_PAGE_ROUTE);

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
		// FIXME: change to info popup with link - you need to login before
		if (!isAuth) return navigate(LOGIN_PAGE_ROUTE);

		if (isFavourite) {
			dispatch(removeFromFavourites(product));
		} else {
			dispatch(addToFavourites(product));
		}
		setIsFavourite((prev) => !prev);
	};

	useEffect(() => {
		const isAlreadyInCart = checkIsInCart(product);
		const isAlreadyFavourite = checkIsFavourite(product);

		setIsInCart(isAlreadyInCart);
		setIsFavourite(isAlreadyFavourite);
		// eslint-disable-next-line
	}, []);

	return (
		<Wrapper as={motion.div} custom={index} {...productCardAnimation}>
			<Image
				style={isImageLoaded ? {} : { display: 'none' }}
				src={image}
				alt={product.title}
				onLoad={() => setIsImageLoaded(true)}
			/>
			<ProductCardSkeleton style={isImageLoaded ? { display: 'none' } : {}} />
			<ButtonsWrapper>
				<ButtonAnimated onClick={handleToggleToFavourite} isActive={isFavourite}>
					<FiHeart />
				</ButtonAnimated>
				<ButtonAnimated onClick={handleClickDetails}>
					<FiSearch />
				</ButtonAnimated>
				<ButtonAnimated onClick={handleToggleToCart} isActive={isInCart}>
					<FiShoppingBag />
				</ButtonAnimated>
			</ButtonsWrapper>
		</Wrapper>
	);
};
