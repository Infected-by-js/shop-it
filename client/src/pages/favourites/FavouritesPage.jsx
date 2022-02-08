import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getFavouritesSelector } from '../../redux/selectors/favourites';
import { removeFromFavourites } from '../../redux/actions/favourites';

import { CART_PAGE_ROUTE, PRODUCTS_PAGE_ROUTE } from '../../router/routes';

import { Header } from '../../containers/';
import { Container, CartProduct } from '../../components';
import { Button } from '../../ui/Button';
import { IconShevronLeft, IconShevronRight } from '../../assets/images/icons';
import { ProductItem } from '../../components/product-item/ProductItem';
import {
	Wrapper,
	Title,
	ButtonsWrapp,
	Content,
	ProductsList,
	Placeholder,
} from './FavouritesPage.styled.js';

export const FavouritesPage = () => {
	const { products } = useSelector(getFavouritesSelector);
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
								<ProductItem key={product.id} product={product} />
							))}
						</ProductsList>
					)}
				</Content>
			</Container>
		</Wrapper>
	);
};
