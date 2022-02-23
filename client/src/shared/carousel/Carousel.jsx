import React, { useState, Children, useMemo } from 'react';

import { ControlsArrows, ControlsDots } from './components/';
import { CarouselItem, Wrapper, Track, CarouselList } from './Carousel.styled';

export const Carousel = ({ children, width, heigth, arrowPosition, dotsPosition }) => {
	const [slideIndex, setSlideIndex] = useState(0);

	const slidesCount = useMemo(() => {
		return Children.count(children);
	}, [children]);

	const newSlides = useMemo(() => {
		return Children.map(children, (child) => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, { width, heigth });
			}
		});
	}, [children, width, heigth]);

	const handlePrevSlide = () => {
		setSlideIndex((currentIndex) => {
			const lastSlide = slidesCount - 1;
			const prevSlide = currentIndex - 1;
			const isFirstSlide = currentIndex === 0;

			return isFirstSlide ? lastSlide : prevSlide;
		});
	};

	const handleNextSlide = () => {
		setSlideIndex((currentIndex) => {
			const firstSlide = 0;
			const nextSlide = currentIndex + 1;
			const isLastSlide = currentIndex === slidesCount - 1;

			return isLastSlide ? firstSlide : nextSlide;
		});
	};

	return (
		<Wrapper>
			<Track slideIndex={slideIndex}>
				<CarouselList>{newSlides}</CarouselList>
			</Track>

			<ControlsArrows
				handleLeft={handlePrevSlide}
				handleRight={handleNextSlide}
				position={arrowPosition}
			/>
			<ControlsDots
				slides={newSlides}
				slide={slideIndex}
				setSlide={setSlideIndex}
				position={dotsPosition}
			/>
		</Wrapper>
	);
};

Carousel.Item = ({ children, width, heigth }) => {
	return (
		<CarouselItem width={width} heigth={heigth}>
			{children}
		</CarouselItem>
	);
};
