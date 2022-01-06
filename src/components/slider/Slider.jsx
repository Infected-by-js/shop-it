import React, { useState } from 'react';
import styled from 'styled-components';

import { Controls, Content } from './components/';
import { slides } from '../../assets/slides';

export const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handlePrevSlide = () => {
		setSlideIndex((currentIndex) => (currentIndex === 0 ? slides.length - 1 : currentIndex - 1));
	};

	const handleNextSlide = () => {
		setSlideIndex((currentIndex) => (currentIndex === slides.length - 1 ? 0 : currentIndex + 1));
	};

	return (
		<>
			<Container>
				<Track slideIndex={slideIndex}>
					<SliderList>
						{slides.map(({ title, description, imageSrc, buttonLabel }, index) => (
							<Content
								key={imageSrc}
								isActiveSlide={slideIndex === index}
								imageSrc={imageSrc}
								title={title}
								description={description}
								buttonLabel={buttonLabel}
							/>
						))}
					</SliderList>
				</Track>
				<Controls
					slides={slides}
					slide={slideIndex}
					setSlide={setSlideIndex}
					handleLeft={handlePrevSlide}
					handleRight={handleNextSlide}
				/>
			</Container>
		</>
	);
};

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const Track = styled.div`
	transition: transform 800ms ease;
	transform: translateX(${({ slideIndex }) => slideIndex * -100}vw);
	z-index: 10;
`;
export const SliderList = styled.ul`
	display: flex;
`;
