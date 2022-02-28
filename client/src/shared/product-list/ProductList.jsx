import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { routeToProductPage } from '../../router/routes';
import { addToCart, addToFavourites, getProducts } from '../../redux/actions';
import {
	cartProductsSelector,
	favouriteProductsSelector,
	productsSelector,
} from '../../redux/selectors';

import { ProductCard } from '../index';
import { Wrapper, EmptyStateTitle } from './ProductList.styled';
import { ProductItemSkeleton } from '../skeletons';
import { checkProductsInList } from '../../helpers/checkProductInList';

export const ProductList = ({ category = '', limit = '' }) => {
	const { products, isLoading } = useSelector(productsSelector);
	const favourites = useSelector(favouriteProductsSelector);
	const cartProducts = useSelector(cartProductsSelector);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts({ category, limit }));
	}, [category]);

	const handleToggleToCart = (product) => {
		dispatch(addToCart(product));
	};

	const handleRouteToDetalsPage = (product) => {
		const productId = product.id;

		navigate(routeToProductPage(productId));
	};

	const handleToggleToFavourite = (product) => {
		dispatch(addToFavourites(product));
	};

	const checkIsInCart = (product) => {
		return checkProductsInList(cartProducts, product);
	};

	const checkIsFavourite = (product) => {
		return checkProductsInList(favourites, product);
	};

	if (isLoading) {
		const skeletons = Array.from({ length: 4 });
		return (
			<Wrapper>
				{skeletons.map((_, index) => (
					<ProductItemSkeleton key={index} />
				))}
			</Wrapper>
		);
	}
	if (!products.length) {
		return <EmptyStateTitle>There will be products soon!</EmptyStateTitle>;
	}

	return (
		<Wrapper>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					image={product.images[0]}
					title={product.title}
					checkIsInCart={checkIsInCart}
					checkIsFavourite={checkIsFavourite}
					onAddToCart={handleToggleToCart}
					onDetails={handleRouteToDetalsPage}
					onAddToFavourites={handleToggleToFavourite}
				/>
			))}
		</Wrapper>
	);
};
