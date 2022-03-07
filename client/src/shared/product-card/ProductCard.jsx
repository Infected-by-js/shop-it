import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiShoppingBag, FiSearch, FiHeart } from 'react-icons/fi';

import { productCardVariants } from '../../helpers/motions-utils';
import { ButtonAnimated } from '../';
import { Wrapper, Image, ButtonsWrapper } from './ProductCard.styled';

export const ProductCard = (props) => {
	const [isInCart, setIsInCart] = useState(false);
	const [isFavourite, setIsFavourite] = useState(false);
	const {
		product,
		image,
		index,
		title,
		onAddToCart,
		onDetails,
		onAddToFavourites,
		checkIsInCart,
		checkIsFavourite,
	} = props;

	const handleToggleToCart = () => {
		onAddToCart(product);
		setIsInCart((prev) => !prev);
	};

	const handleClickDetails = () => {
		onDetails(product);
	};

	const handleToggleToFavourite = () => {
		onAddToFavourites(product);
		setIsFavourite((prev) => !prev);
	};

	useEffect(() => {
		const isAlreadyInCart = checkIsInCart(product);
		const isAlreadyFavourite = checkIsFavourite(product);

		setIsInCart(isAlreadyInCart);
		setIsFavourite(isAlreadyFavourite);
	}, []);

	return (
		<Wrapper as={motion.div} variants={productCardVariants} custom={index} {...productCardVariants}>
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
