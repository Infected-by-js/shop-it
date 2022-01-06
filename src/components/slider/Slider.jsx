import React, { useState, useEffect } from 'react';

import { Controls } from './components/Controls.jsx';
import { Dots } from './components/Dots.jsx';
import { Slide } from './components/Slide.jsx';
import styled from 'styled-components';

const slides = [
	{
		title: 'slide 1 Title',
		description: 'slide 1 Description',
		imageSrc: './images/banner_1.jpg',
	},
	{
		title: 'slide 2 Title',
		description: 'slide 2 Description',
		imageSrc: './images/banner_2.jpg',
	},
	{
		title: 'slide 3 Title',
		description: 'slide 3 Description',
		imageSrc: './images/banner_3.jpg',
	},
];

export const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handlePrevSlide = () => {
		setSlideIndex((currentIndex) => (currentIndex === 0 ? slides.length - 1 : currentIndex - 1));
	};

	const handleNextSlide = () => {
		setSlideIndex((currentIndex) => (currentIndex === slides.length - 1 ? 0 : currentIndex + 1));
	};

	return (
		<Container>
			<SliderWrapp>
				<Track slideIndex={slideIndex}>
					<SliderList>
						{slides.map(({ title, description, imageSrc }) => (
							<SlideWrapper key={imageSrc}>
								<Slide imageSrc={imageSrc} title={title} description={description} />
							</SlideWrapper>
						))}
					</SliderList>
				</Track>
				<Controls onLeft={handlePrevSlide} onRight={handleNextSlide} />
			</SliderWrapp>
			<Dots slides={slides} slide={slideIndex} setSlide={setSlideIndex} />
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	width: 100%;
	overflow: hidden;
`;

const SliderWrapp = styled.div``;

const Track = styled.div`
	transition: transform 800ms ease;
	transform: translateX(${({ slideIndex, slideWidth }) => slideIndex * -100}vw);
`;
const SliderList = styled.ul`
	display: flex;
`;
const SlideWrapper = styled.li`
	min-width: 100vw;
	max-width: 100vw;
	height: 100%;
`;
