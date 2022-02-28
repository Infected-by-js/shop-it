import { useEffect } from 'react';
import { useState } from 'react';

import { FiShoppingBag, FiSearch, FiHeart } from 'react-icons/fi';
import { Wrapper, Image, ButtonsWrapper, Button } from './ProductCard.styled';

export const ProductCard = (props) => {
	const [isInCart, setIsInCart] = useState(false);
	const [isFavourite, setIsFavourite] = useState(false);
	const {
		image,
		product,
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
		<Wrapper>
			<Image src={image} alt={title} />
			<ButtonsWrapper>
				<Button onClick={handleToggleToCart} isActive={isInCart}>
					<FiShoppingBag />
				</Button>
				<Button onClick={handleClickDetails}>
					<FiSearch />
				</Button>
				<Button onClick={handleToggleToFavourite} isActive={isFavourite}>
					<FiHeart />
				</Button>
			</ButtonsWrapper>
		</Wrapper>
	);
};
