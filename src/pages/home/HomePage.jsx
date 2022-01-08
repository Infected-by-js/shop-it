import React from 'react';
import * as Styled from './HomePage.styled';
import {
	Container,
	Logo,
	Search,
	Navbar,
	Slider,
	SortCategories,
	ProductCard,
} from '../../components';
import { Footer } from '../../containers';

import { products } from '../../assets/products';

export const HomePage = () => {
	return (
		<>
			<Container>
				<Styled.HeaderContainer>
					<Search />
					<Logo />
					<Navbar />
				</Styled.HeaderContainer>
			</Container>
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
