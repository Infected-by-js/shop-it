import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { ProductService } from '../../api/ProductService';

import { Footer, Header, ProductList, CategoryList } from '../../containers';
import { Container, Slider } from '../../components';
import { Main } from './HomePage.styled';

export const HomePage = () => {
	const [products, setProducts] = useState([]);
	const [fetchProducts] = useFetch(async (params) => {
		const { data } = await ProductService.getAll(params);
		setProducts([...products, ...data]);
	});

	useEffect(() => {
		fetchProducts({ limit: 8 });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log(products);
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
