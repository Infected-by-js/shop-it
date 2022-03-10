import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiShoppingBag, FiSearch, FiHeart } from 'react-icons/fi';

import { productCardAnimation } from '../../helpers/motions-utils';
import { ButtonAnimated } from '../';
import { Wrapper, Image, ButtonsWrapper } from './ProductCard.styled';
import { useDispatch } from 'react-redux';
import {
	addToCart,
	addToFavourites,
	removeFromCart,
	removeFromFavourites,
} from '../../redux/actions';
import { routeToProductPage } from '../../router/routes';
import { useNavigate } from 'react-router-dom';

export const ProductCard = (props) => {
	const { product, image, index, title, checkIsInCart, checkIsFavourite } = props;
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
		const isAlreadyInCart = checkIsInCart(product);
		const isAlreadyFavourite = checkIsFavourite(product);

		setIsInCart(isAlreadyInCart);
		setIsFavourite(isAlreadyFavourite);
	}, []);

	return (
		<Wrapper as={motion.div} custom={index} {...productCardAnimation}>
			<Image src={image} alt={title} />
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
