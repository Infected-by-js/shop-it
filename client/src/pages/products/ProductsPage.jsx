import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Main, MainTitle, ProductsPageWrapper } from './ProductsPage.styled';
import { Header, Container, ProductList, Footer } from '../../shared/';
import { Filters } from './components';
import { categories } from '../../assets/categories';

export const ProductsPage = () => {
	const params = useParams();
	const navigate = useNavigate();
	const activeCategory = params.categoryId ?? '';

	const changeCategory = (value) => {
		navigate(value);
	};

	return (
		<ProductsPageWrapper>
			<Header />
			<Main>
				<MainTitle>Original {activeCategory ? activeCategory : 'arts'} for sale</MainTitle>
				<Container>
					<Filters
						list={categories}
						activeItemValue={activeCategory}
						changeActiveItem={changeCategory}
					/>
					<ProductList category={activeCategory} />
				</Container>
			</Main>
			<Footer />
		</ProductsPageWrapper>
	);
};
