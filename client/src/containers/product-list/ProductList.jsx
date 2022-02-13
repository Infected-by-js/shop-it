import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, getProducts, removeFromCart } from '../../redux/actions';
import { cartProductsSelector, favouritesSelector, productsSelector } from '../../redux/selectors';

import { ProductCard, ProductItemSkeleton } from '../../components';
import { useNavigate } from 'react-router-dom';

import { routeToProductPage } from '../../router/routes';
import { Wrapper, EmptyStateTitle } from './ProductList.styled';

export const ProductList = ({ category = '', limit = 8 }) => {
	const { products, isLoading, error } = useSelector(productsSelector);
	const navigate = useNavigate();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts({ category, limit }));
	}, [category, limit]);

	if (isLoading) {
		const emptyArray = Array.from({ length: 4 });
		return (
			<Wrapper>
				{emptyArray.map((_, index) => (
					<ProductItemSkeleton key={index} />
				))}
			</Wrapper>
		);
	}

	const handleToggleToCart = (product) => {
		console.log('add to cart');
	};

	const handleRouteToDetalsPage = (product) => {
		const productId = product.id;
		navigate(routeToProductPage(productId));
	};
	const handleToggleToFavourite = () => {
		console.log('add to fav');
	};

	return !products.length ? (
		<EmptyStateTitle>There will be products soon!</EmptyStateTitle>
	) : (
		<Wrapper>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					image={product.images[0]}
					title={product.title}
					onAddToCart={handleToggleToCart}
					onDetails={handleRouteToDetalsPage}
					onAddToFavourites={handleToggleToFavourite}
				/>
			))}
		</Wrapper>
	);
};
