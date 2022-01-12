import React from 'react';
import { useSelector } from 'react-redux';
import { Main, ProductsList } from './HomePage.styled';

import { Footer, Header } from '../../containers';
import { Container, Slider, SortCategories, Product } from '../../components';

export const HomePage = () => {
	const { products } = useSelector(({ products }) => products);

	return (
		<>
			<Header />
			<Slider />
			<Main>
				<Container>
					<SortCategories />

					<ProductsList>
						{products.map((product) => (
							<Product key={product.image_src} {...product} />
						))}
					</ProductsList>
				</Container>
			</Main>
			<Footer />
		</>
	);
};
