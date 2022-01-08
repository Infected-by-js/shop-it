import React from 'react';
import styled from 'styled-components';

import { Container, Logo, Search, Navbar, Slider, SortCategory, ProductCard } from '../components';
import { Footer } from '../containers/';

import { products } from '../assets/products';
import { color, device, headerHeight } from '../styles/constants';
import { darken } from 'polished';

export const HomePage = () => {
	return (
		<>
			<Container>
				<HeaderContainer>
					<Search />
					<Logo />
					<Navbar />
				</HeaderContainer>
			</Container>
			<Slider />
			<Main>
				<Container>
					<SortCategory />

					<Products>
						{products.map((product) => (
							<ProductCard key={product.image_src} {...product} />
						))}
					</Products>
				</Container>
			</Main>
			<Footer />
		</>
	);
};

const HeaderContainer = styled.header`
	height: ${headerHeight};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Main = styled.main`
	padding-top: 35px;
	padding-bottom: 150px;

	background-color: ${darken(0.03, color.white)};
`;

const Products = styled.div`
	margin-top: 35px;
	display: grid;
	gap: 30px;
	grid-template-columns: 1fr;
	align-items: flex-start;
	justify-items: center;

	@media ${device.tablet} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${device.laptop} {
		grid-template-columns: repeat(4, 1fr);
	}
`;
