import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
	productsSelector,
	cartProductsSelector,
	favouriteProductsSelector,
} from '../../redux/selectors';
import {
	getOneProduct,
	addToCart,
	removeFromCart,
	addToFavourites,
	removeFromFavourites,
} from '../../redux/actions';

import { checkProductsInList } from '../../helpers/checkProductInList';

import { InfoSkeleton, OverviewSkeleton } from '../../components';
import { Header, Overview, Info } from '../../containers';
import { Main, Column } from './ProductPage.styled';

export const ProductPage = () => {
	const { activeProduct, isLoading, error } = useSelector(productsSelector);
	const productsInCart = useSelector(cartProductsSelector);
	const favourites = useSelector(favouriteProductsSelector);
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOneProduct(params.productId));
	}, [params.productId]);

	const isAlreadyInCart = useMemo(() => {
		return checkProductsInList(productsInCart, activeProduct);
	}, [activeProduct, productsInCart]);

	const isAlreadyFavourite = useMemo(() => {
		return checkProductsInList(favourites, activeProduct);
	}, [activeProduct, favourites]);

	const handleToggleToCart = () => {
		if (isAlreadyInCart) {
			dispatch(removeFromCart(activeProduct));
		} else {
			dispatch(addToCart(activeProduct));
		}
	};

	const handleToggleToFavourite = () => {
		if (isAlreadyFavourite) {
			dispatch(removeFromFavourites(activeProduct));
		} else {
			dispatch(addToFavourites(activeProduct));
		}
	};

	const handleClickBack = () => {
		navigate(-1);
	};

	return (
		<>
			<Header />
			<Main>
				{error ? (
					<h1>{error}</h1>
				) : (
					<>
						<Column>
							{isLoading ? (
								<InfoSkeleton />
							) : (
								<Info
									product={activeProduct}
									toggleToCart={handleToggleToCart}
									toggleToFavourite={handleToggleToFavourite}
									isInCart={isAlreadyInCart}
									isFavourite={isAlreadyFavourite}
									onClickBack={handleClickBack}
								/>
							)}
						</Column>
						<Column>
							{isLoading ? <OverviewSkeleton /> : <Overview images={activeProduct.images} />}
						</Column>
					</>
				)}
			</Main>
		</>
	);
};
