import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { routeToProductPage } from '../../router/routes';
import { addToCart, addToFavourites, getProducts } from '../../redux/actions';
import { productsSelector } from '../../redux/selectors';

import { ProductCard } from '../index';
import { Wrapper, EmptyStateTitle } from './ProductList.styled';
import { ProductItemSkeleton } from '../skeletons';

export const ProductList = ({ category = '', limit = 8 }) => {
	const { products, isLoading } = useSelector(productsSelector);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts({ category, limit }));
	}, [category, limit]);

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
					onAddToCart={handleToggleToCart}
					onDetails={handleRouteToDetalsPage}
					onAddToFavourites={handleToggleToFavourite}
				/>
			))}
		</Wrapper>
	);
};
