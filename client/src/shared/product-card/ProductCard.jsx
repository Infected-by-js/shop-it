import React, { useState } from 'react';

import { IconCart, IconSearch, IconHeart } from '../../assets/images/icons';
import { Wrapper, Image, ButtonsWrapper, Button } from './ProductCard.styled';

export const ProductCard = (props) => {
	const { image, product, title, onAddToCart, onDetails, onAddToFavourites } = props;
	const [isInCart, setIsInCart] = useState(false);
	const [isFavourite, setIsFavourite] = useState(false);

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

	return (
		<Wrapper>
			<Image src={image} alt={title} />
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
