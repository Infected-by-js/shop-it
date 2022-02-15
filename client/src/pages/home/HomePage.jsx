import React from 'react';

import { Footer, Header, ProductList, CategoryList } from '../../containers';
import { Container, Slider } from '../../components';
import { Main } from './HomePage.styled';

export const HomePage = () => {
	return (
		<>
			<Header />
			<Main>
				<Slider />
				<CategoryList />
				<Container>
					<ProductList />
				</Container>
			</Main>
			<Footer />
		</>
	);
};
