import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductService from '../../api/ProductService';

import { Header, Footer, ProductList } from '../../containers';
import { Container, SortBlock } from '../../components/';
import { Main, MainTitle, ProductsPageWrapper } from './ProductsPage.styled';

import { categories } from '../../assets/categories';
import { PRODUCTS } from '../../api/endpoints';
import { setCategory } from '../../redux/features/products/productsSlice';

export const ProductsPage = () => {
	const params = useParams();
	const [products, setProducts] = useState([]);
	const [activeCategory, setActveCategory] = useState(params.categoryId || categories[0].value);
	const dispatch = useDispatch();

	useEffect(() => {
		const isDefaultCategory = activeCategory === categories[0].value;

		const getProducts = async () => {
			const response = await ProductService.fetchAll(PRODUCTS, {
				category: isDefaultCategory ? '' : activeCategory,
			});
			setProducts(response);
		};

		getProducts();
	}, [activeCategory]);

	const changeCategory = (value) => {
		setActveCategory(value);
		dispatch(setCategory(value));
	};

	return (
		<ProductsPageWrapper>
			<Header />
			<Main>
				<MainTitle>Original arts for sale</MainTitle>
				<Container>
					<SortBlock
						categories={categories}
						activeCategory={activeCategory}
						changeActiveCategory={changeCategory}
					/>
					<ProductList products={products} />
				</Container>
			</Main>
			<Footer />
		</ProductsPageWrapper>
	);
};
