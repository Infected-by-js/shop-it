import React from 'react';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carousel.css';

const responsive = {
	desktop: {
		breakpoint: {
			max: 3000,
			min: 1024,
		},
		items: 1,
		slidesToSlide: 1,
		partialVisibilityGutter: 0,
	},
	mobile: {
		breakpoint: {
			max: 464,
			min: 0,
		},
		items: 1,
		showDots: false,
		autoPlaySpeed: 10000,
		slidesToSlide: 1,
		partialVisibilityGutter: 0,
	},
	tablet: {
		breakpoint: {
			max: 1024,
			min: 200,
		},
		items: 1,
		autoPlaySpeed: 10000,
		showDots: false,
		slidesToSlide: 1,
		partialVisibilityGutter: 0,
	},
};

const config = {
	arrows: false,
	showDots: true,
	infinite: true,
	autoPlay: true,
	keyBoardControl: true,
	autoPlaySpeed: 6000,
	customTransition: 'all 1s',
	transitionDuration: 800,
};

export const Carousel = ({ children }) => {
	return (
		<MultiCarousel responsive={responsive} style={{ alignItems: 'center' }} {...config}>
			{children}
		</MultiCarousel>
	);
};
