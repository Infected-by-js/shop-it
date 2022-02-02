import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductItem } from '../../components';
import { Wrapper } from './ProductList.styled';
import { getProducts } from '../../redux/actions/products';
import { addToCart, removeFromCart } from '../../redux/actions/cart';
import { useNavigate } from 'react-router-dom';
import { routeToDetailsPage } from '../../router/routes';
import { addToFavourites, removeFromFavourites } from '../../redux/actions/favourites';

export const ProductList = ({ category = '', limit = 8 }) => {
	const { products, isLoading, error } = useSelector(({ products }) => products);
	const cartProducts = useSelector(({ cart }) => cart.products);
	const favouritesProducts = useSelector(({ favourites }) => favourites.products);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getProducts({ category, limit }));
	}, [category, limit]);

	const handleToggleToCart = (product) => {
		const isAlreadyInCart = cartProducts.some((cartProduct) => cartProduct._id === product._id);

		if (isAlreadyInCart) {
			dispatch(removeFromCart(product));
		} else {
			dispatch(addToCart(product));
		}
	};

	const handleClickDetails = (product) => {
		navigate(routeToDetailsPage(product._id));
	};

	const handleToggleToFavourite = (product) => {
		const isAlreadyInFavourites = favouritesProducts.some(
			(favourite) => favourite._id === product._id
		);

		if (isAlreadyInFavourites) {
			dispatch(removeFromFavourites(product._id));
		} else {
			dispatch(addToFavourites(product));
		}
	};

	return (
		<Wrapper>
			{products.map((product) => (
				<ProductItem
					key={product._id}
					product={product}
					onToggleToCart={handleToggleToCart}
					onToggleToFavourite={handleToggleToFavourite}
					onClickDetails={handleClickDetails}
				/>
			))}
		</Wrapper>
	);
};
