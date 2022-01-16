import React, { useState } from 'react';
import { Wrapper, Track, SliderList } from './Slider.styled';

import { Content, ControlsArrows, ControlsDots } from './components/';
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
		<Wrapper>
			<Track slideIndex={slideIndex}>
				<SliderList>
					{slides.map((slide, index) => (
						<Content key={slide.imageSrc} isActiveSlide={slideIndex === index} {...slide} />
					))}
				</SliderList>
			</Track>

			<ControlsArrows handleLeft={handlePrevSlide} handleRight={handleNextSlide} />
			<ControlsDots slides={slides} slide={slideIndex} setSlide={setSlideIndex} />
		</Wrapper>
	);
};
