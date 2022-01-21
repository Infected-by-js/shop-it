import React, { useEffect, useState } from 'react';
import ProductService from '../../api/ProductService';

import { Footer, Header, ProductList, CategoryList } from '../../containers';
import { Container, Slider } from '../../components';
import { Main } from './HomePage.styled';
import { PRODUCTS } from '../../api/endpoints';

export const HomePage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const response = await ProductService.fetchAll(PRODUCTS, { limit: 8 });
			setProducts(response);
		};

		getProducts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Header />
			<Main>
				<Slider />
				<Container>
					<CategoryList />

					<ProductList products={products} />
				</Container>
			</Main>
			<Footer />
		</>
	);
};
