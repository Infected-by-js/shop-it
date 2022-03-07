import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useScrollToTop } from '../../hooks/';
import { routeToProductPage } from '../../router/routes';
import { addToCart, addToFavourites, getProducts, setPage } from '../../redux/actions';
import {
	cartProductsSelector,
	favouriteProductsSelector,
	productsSelector,
} from '../../redux/selectors';

import { ProductCard, ProductItemSkeleton, Pagination } from '../';
import { checkProductsInList } from '../../helpers/checkProductInList';
import { Wrapper, EmptyStateTitle } from './ProductList.styled';

const SCROLL_POSITION = 0;

export const ProductList = ({ category = '' }) => {
	const { products, isLoading, pages, page } = useSelector(productsSelector);
	const favourites = useSelector(favouriteProductsSelector);
	const cartProducts = useSelector(cartProductsSelector);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts({ category, page }));
	}, [category, page]);

	useScrollToTop(SCROLL_POSITION, isLoading);

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

	const handleClickPagination = (page) => {
		dispatch(setPage(page));
	};

	const checkIsInCart = (product) => checkProductsInList(cartProducts, product);
	const checkIsFavourite = (product) => checkProductsInList(favourites, product);

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
		products && (
			<>
				<Wrapper as={motion.div}>
					{products.map((product, index) => (
						<ProductCard
							key={product.id}
							index={index}
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
				<Pagination pagesCount={pages} activePage={page} onClick={handleClickPagination} />
			</>
		)
	);
};
