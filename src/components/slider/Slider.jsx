import React, { useEffect, useState } from 'react';
import * as S from './Slider.styled.js';

const slides = ['./images/banner_1.jpg', './images/banner_2.jpg', './images/banner_3.jpg'];

export const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handlePrevSlide = () => {
		if (slideIndex > 0) {
			setSlideIndex((prev) => prev - 1);
		}
	};

	const handleNextSlide = () => {
		if (slideIndex < slides.length - 1) {
			setSlideIndex((prev) => prev + 1);
		}
	};

	return (
		<S.Slider>
			<S.SliderTrack slideIndex={slideIndex}>
				<S.SliderList>
					{slides.map((slide, index) => (
						<S.SliderItem key={slide} activeSlide={index}>
							<img src={slide} alt='slide' />
						</S.SliderItem>
					))}
				</S.SliderList>
			</S.SliderTrack>
			<S.ArrowPrev onClick={handlePrevSlide} />
			<S.ArrowNext onClick={handleNextSlide} />
		</S.Slider>
	);
};
