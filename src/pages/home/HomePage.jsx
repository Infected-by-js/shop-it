import React from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './HomePage.styled';

import { Footer, Header } from '../../containers';
import { Container, Slider, SortCategories, ProductCard } from '../../components';

export const HomePage = () => {
	const { products } = useSelector(({ products }) => products);

	return (
		<>
			<Header />
			<Slider />
			<Styled.Main>
				<Container>
					<SortCategories />

					<Styled.Products>
						{products.map((product) => (
							<ProductCard key={product.image_src} {...product} />
						))}
					</Styled.Products>
				</Container>
			</Styled.Main>
			<Footer />
		</>
	);
};
