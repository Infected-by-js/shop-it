import React from 'react';
import { slides } from '../../assets/slides';

import { Footer, Header, ProductList, CategoryList } from '../../containers';
import { Container, Carousel, Banner } from '../../components';
import { Main } from './HomePage.styled';

export const HomePage = () => {
	return (
		<>
			<Header />
			<Main>
				<Carousel arrowPosition='right' dotsPosition='right'>
					{slides.map((slide) => (
						<Carousel.Item key={slide.title}>
							<Banner {...slide} />
						</Carousel.Item>
					))}
				</Carousel>
				<CategoryList />
				<Container>
					<ProductList />
				</Container>
			</Main>
			<Footer />
		</>
	);
};
