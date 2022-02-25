import React from 'react';
import { slides } from '../../assets/slides';

import { Footer, Header, ProductList, Container, Carousel } from '../../shared';
import { Banner, CategoryList } from './components/';
import { Main, Wrapper, BgVideo, Overlay } from './HomePage.styled';
import mainVideo from '../../assets/images/main.mp4';

const config = {
	lazyload: true,
	shownNav: true,
	showNav: false,
	showThumbnails: false,
	showFullscreenButton: false,
	showPlayButton: false,
	showBullets: true,
	autoPlay: true,
	slideDuration: 700,
	slideInterval: 6000,
};

export const HomePage = () => {
	return (
		<>
			<Header />
			<Main>
				<Container>
					<Wrapper>
						<BgVideo src={mainVideo} autoPlay loop muted />
						<Overlay />
						{/* <Carousel>
							{slides.map((slide) => (
								<Banner key={slide.title} {...slide} />
							))}
						</Carousel>  */}
					</Wrapper>
				</Container>
			</Main>
		</>
	);
};
