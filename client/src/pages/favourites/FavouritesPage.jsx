import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { removeFromFavourites } from '../../redux/actions';
import { favouritesSelector } from '../../redux/selectors';
import { CART_PAGE_ROUTE, PRODUCTS_PAGE_ROUTE } from '../../router/routes';

import { Container, ProductCard, Button, Header } from '../../shared';

import {
	Wrapper,
	Title,
	ButtonsWrapp,
	Content,
	ProductsList,
	Placeholder,
} from './FavouritesPage.styled.js';

export const FavouritesPage = () => {
	const products = useSelector(favouritesSelector);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleRemoveFromCart = (product) => {
		dispatch(removeFromFavourites(product));
	};

	const handleNavigateToCart = () => {
		navigate(CART_PAGE_ROUTE);
	};

	const handleBack = () => {
		navigate(PRODUCTS_PAGE_ROUTE);
	};

	return (
		<Wrapper>
			<Header />

			<Container>
				<Title>Your Favourites</Title>
				<ButtonsWrapp>
					<Button outlined onClick={handleBack}>
						<HiChevronLeft />
						CONTINUE SHOPPING
					</Button>
					<Button outlined onClick={handleNavigateToCart}>
						CHECKOUT NOW
						<HiChevronRight />
					</Button>
				</ButtonsWrapp>

				<Content>
					{!products.length ? (
						<Placeholder>You are did not add anything yet :(</Placeholder>
					) : (
						<ProductsList>
							{products.map((product) => (
								<ProductCard key={product.id} />
							))}
						</ProductsList>
					)}
				</Content>
			</Container>
		</Wrapper>
	);
};
