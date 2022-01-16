import React from 'react';
import { useParams } from 'react-router-dom';
import { Header, Footer, ProductList } from '../../containers';
import { Container, SortBlock } from '../../components/';
import { Main, MainTitle } from './ProductsPage.styled';

import { categories } from '../../assets/categories';

export const ProductsPage = () => {
	const params = useParams();
	const activeCategory = params.categoryId;

	const changeCategory = (value) => {
		console.log(value);
	};

	return (
		<>
			<Header />
			<Main>
				<MainTitle>Original arts for sale</MainTitle>
				<Container>
					<SortBlock
						categories={categories}
						activeCategory={activeCategory}
						changeActiveCategory={changeCategory}
					/>
					<ProductList />
				</Container>
			</Main>
			<Footer />
		</>
	);
};
