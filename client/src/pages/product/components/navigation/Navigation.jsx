import React from 'react';
import { FiHeart, FiChevronLeft, FiShoppingBag } from 'react-icons/fi';
import { Nav, BackButton, IconWrapp, Icons } from './Navigation.styled';

export const Navigation = () => {
	return (
		<Nav>
			<BackButton>
				<FiChevronLeft />
				Back to all ArtWorks
			</BackButton>
			<Icons>
				<IconWrapp>
					<FiShoppingBag />
				</IconWrapp>
				<IconWrapp>
					<FiHeart />
				</IconWrapp>
			</Icons>
		</Nav>
	);
};
