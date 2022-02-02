import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories } from '../../assets/categories';

import { Header, Footer, ProductList } from '../../containers';
import { Container, SortByCategory } from '../../components/';
import { Main, MainTitle, ProductsPageWrapper } from './ProductsPage.styled';

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
					<SortByCategory
						categories={categories}
						activeCategory={activeCategory}
						changeCategory={changeCategory}
					/>
					<ProductList category={activeCategory} />
				</Container>
			</Main>
			<Footer />
		</ProductsPageWrapper>
	);
};
