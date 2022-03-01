import React from 'react';
import { FiHeart, FiChevronLeft, FiShoppingBag } from 'react-icons/fi';
import { Nav, BackButton, IconCart, IconFavourite, Icons } from './Navigation.styled';

export const Navigation = (props) => {
	const { onBack, isAuth, onAddToCart, onAddToFavourite, isInCart, isFavourite } = props;

	return (
		<Nav>
			<BackButton onClick={onBack}>
				<FiChevronLeft />
				Back to ArtWorks
			</BackButton>
			{isAuth && (
				<Icons>
					<IconFavourite isFavourite={isFavourite} onClick={onAddToFavourite}>
						<FiHeart />
					</IconFavourite>
					<IconCart isInCart={isInCart} onClick={onAddToCart}>
						<FiShoppingBag />
					</IconCart>
				</Icons>
			)}
		</Nav>
	);
};
