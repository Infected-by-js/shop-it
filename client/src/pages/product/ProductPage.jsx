import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
	productsSelector,
	cartProductsSelector,
	favouriteProductsSelector,
	selectIsUserAuth,
} from '../../redux/selectors';
import {
	getOneProduct,
	addToCart,
	removeFromCart,
	addToFavourites,
	removeFromFavourites,
} from '../../redux/actions';

import { checkProductsInList } from '../../helpers/checkProductInList';
import { HOME_PAGE_ROUTE } from '../../router/routes';

import { Container, Header } from '../../shared';
import { ImageSection, DescriptionSection, Navigation } from './components/';
import { Main } from './ProductPage.styled';

export const ProductPage = () => {
	const { activeProduct, isLoading, error } = useSelector(productsSelector);
	const isAuth = useSelector(selectIsUserAuth);
	const productsInCart = useSelector(cartProductsSelector);
	const favourites = useSelector(favouriteProductsSelector);
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
		navigate(HOME_PAGE_ROUTE);
	};

	return (
		<>
			<Header />
			<Container as='main'>
				{isLoading ? (
					<p>loading</p>
				) : (
					<Main>
						<Navigation
							onBack={handleClickBack}
							onAddToFavourite={handleToggleToFavourite}
							onAddToCart={handleToggleToCart}
							isAuth={isAuth}
							isInCart={isAlreadyInCart}
							isFavourite={isAlreadyFavourite}
						/>
						<ImageSection images={activeProduct?.images} />
						<DescriptionSection />
					</Main>
				)}
			</Container>
		</>
	);
};
