import React, { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Header, Overview, Info } from '../../containers';
import { Main, Column } from './ProductPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../../redux/actions/products';
import { addToCart, removeFromCart } from '../../redux/actions/cart';
import { checkProductsInList } from '../../utils/checkProductInList';
import { addToFavourites, removeFromFavourites } from '../../redux/actions/favourites';

export const ProductPage = () => {
	const { activeProduct, isLoading, error } = useSelector(({ products }) => products);
	const productsInCart = useSelector(({ cart }) => cart.products);
	const favourites = useSelector(({ favourites }) => favourites.products);
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOneProduct(params.productId));
	}, []);

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
		navigate('/');
	};

	if (isLoading) {
		return <h3>Loading...</h3>;
	}

	return (
		<>
			<Header />
			<Main>
				<Column>
					<Info
						product={activeProduct}
						toggleToCart={handleToggleToCart}
						toggleToFavourite={handleToggleToFavourite}
						isInCart={isAlreadyInCart}
						isFavourite={isAlreadyFavourite}
						onClickBack={handleClickBack}
					/>
				</Column>
				<Column>
					<Overview images={activeProduct.images} />
				</Column>
			</Main>
		</>
	);
};
