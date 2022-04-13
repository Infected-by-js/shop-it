import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
	cartProductsSelector,
	favouriteProductsSelector,
	productsSelector,
	selectIsUserAuth,
} from '../../redux/selectors';
import { getProducts, setPage } from '../../redux/actions';
import { routeToCategoryPage } from '../../router/routes';
import { useScrollToTop } from '../../hooks';

import { checkProductsInList } from '../../helpers/checkProductInList';
import { categories } from '../../assets/categories';

import { Container, EmptyState, Footer } from '../../shared';
import { Filters, ProductCard, Pagination } from './components';

import { Main, MainTitle, ProductsPageWrapper, ProductList } from './HomePage.styled';
import { bounceVariants, defaultEasing } from '../../helpers/motions-utils';

const initialCategory = categories[0].value;
const SCROLL_POSITION = 0;

export const HomePage = () => {
	const { products, isLoading, pages, page } = useSelector(productsSelector);
	const isAuth = useSelector(selectIsUserAuth);
	const favourites = useSelector(favouriteProductsSelector);
	const cartProducts = useSelector(cartProductsSelector);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { categoryId } = useParams();

	const activeCategory = useMemo(() => {
		return categoryId ?? initialCategory;
	}, [categoryId]);

	const changeCategory = (value) => {
		dispatch(setPage(1));
		navigate(value ? routeToCategoryPage(value) : value);
	};

	useScrollToTop(SCROLL_POSITION, isLoading);

	useEffect(() => {
		dispatch(getProducts({ category: activeCategory, page }));
		// eslint-disable-next-line
	}, [activeCategory, page]);

	const handleClickPagination = (page) => {
		dispatch(setPage(page));
	};

	const checkIsInCart = (product) => checkProductsInList(cartProducts, product);
	const checkIsFavourite = (product) => checkProductsInList(favourites, product);

	return (
		<ProductsPageWrapper>
			<Main>
				<MainTitle as={motion.h1} {...bounceVariants}>
					Original {activeCategory ? activeCategory : 'arts'} for sale
				</MainTitle>
				<Container>
					<Filters
						list={categories}
						activeItemValue={activeCategory}
						changeActiveItem={changeCategory}
					/>
					<ProductList as={motion.div}>
						{products ? (
							products.map((product, index) => (
								<ProductCard
									key={product.id}
									index={index}
									isAuth={isAuth}
									product={product}
									image={product.images[0]}
									checkIsInCart={checkIsInCart}
									checkIsFavourite={checkIsFavourite}
								/>
							))
						) : (
							<EmptyState label='There will be products soon!' />
						)}
					</ProductList>
					{!isLoading && (
						<Pagination pagesCount={pages} activePage={page} onClick={handleClickPagination} />
					)}
				</Container>
			</Main>
			<Footer />
		</ProductsPageWrapper>
	);
};
