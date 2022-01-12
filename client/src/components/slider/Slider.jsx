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

			<ControlsArrows handleLeft={handlePrevSlide} handleRight={handleNextSlide} />
			<ControlsDots slides={slides} slide={slideIndex} setSlide={setSlideIndex} />
		</Wrapper>
	);
};
