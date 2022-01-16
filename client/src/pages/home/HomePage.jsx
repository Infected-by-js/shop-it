import React from 'react';
import { Main } from './HomePage.styled';

import { Footer, Header, ProductList, CategoryList } from '../../containers';
import { Container, Slider } from '../../components';

export const HomePage = () => {
	return (
		<>
			<Header />
			<Slider />
			<Main>
				<Container>
					<CategoryList />
					<ProductList />
				</Container>
			</Main>
			<Footer />
		</>
	);
};
