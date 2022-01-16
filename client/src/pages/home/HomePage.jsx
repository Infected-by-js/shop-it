import React from 'react';
import { Main } from './HomePage.styled';

import { Footer, Header, ProductList } from '../../containers';
import { Container, Slider, ProductsCategories } from '../../components';

export const HomePage = () => {
	return (
		<>
			<Header />
			<Slider />
			<Main>
				<Container>
					<ProductsCategories />
					<ProductList />
				</Container>
			</Main>
			<Footer />
		</>
	);
};
