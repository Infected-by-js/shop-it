import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Footer, Header, ProductList, CategoryList } from '../../containers';
import { Container, Slider } from '../../components';
import { Main } from './HomePage.styled';
import { getProducts } from '../../redux/actions/products';

export const HomePage = () => {
	const { products, isLoading, error } = useSelector(({ products }) => products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	return (
		<>
			<Header />
			<Main>
				<Slider />
				<CategoryList />
				<Container>
					<ProductList products={products} />
				</Container>
			</Main>
			<Footer />
		</>
	);
};
