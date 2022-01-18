import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header, Footer, ProductList } from '../../containers';
import { Container, SortBlock } from '../../components/';
import { Main, MainTitle, ProductsPageWrapper } from './ProductsPage.styled';

import { categories } from '../../assets/categories';
import { useFetch } from '../../hooks/useFetch';
import { ProductService } from '../../api/ProductService';

export const ProductsPage = () => {
	const params = useParams();
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState(params.categoryId || categories[0].value);
	const [getProducts] = useFetch(async (params) => {
		const { data } = await ProductService.getAll(params);
		setProducts(data);
	});

	useEffect(() => {
		const isDefaultCategory = category === categories[0].value;
		getProducts({ category: isDefaultCategory ? '' : category });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category]);

	const changeCategory = (value) => {
		setCategory(value);
	};

	console.log('RERENDEER');
	return (
		<ProductsPageWrapper>
			<Header />
			<Main>
				<MainTitle>Original arts for sale</MainTitle>
				<Container>
					<SortBlock
						categories={categories}
						activeCategory={category}
						changeActiveCategory={changeCategory}
					/>
					<ProductList products={products} />
				</Container>
			</Main>
			<Footer />
		</ProductsPageWrapper>
	);
};
