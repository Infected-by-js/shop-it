import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { removeFromFavourites } from '../../redux/actions';
import { favouritesSelector } from '../../redux/selectors';
import { CART_PAGE_ROUTE, PRODUCTS_PAGE_ROUTE } from '../../router/routes';

import { Header } from '../../containers/';
import { Container, ProductCard } from '../../components';
import { Button } from '../../ui/Button';
import { IconShevronLeft, IconShevronRight } from '../../assets/images/icons';
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
						<IconShevronLeft />
						CONTINUE SHOPPING
					</Button>
					<Button outlined onClick={handleNavigateToCart}>
						CHECKOUT NOW
						<IconShevronRight />
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
