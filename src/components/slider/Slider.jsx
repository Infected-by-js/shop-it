import React, { useEffect, useState } from 'react';
import * as S from './Slider.styled.js';
import { IconShevronLeft, IconShevronRight } from '../../assets/icons/';

const slides = [
	{
		imgM: './images/banner_1.jpg',
	},
	{
		imgM: './images/banner_2.jpg',
	},
	{
		imgM: './images/banner_3.jpg',
	},
];

export const Slider = ({ children }) => {
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
		<S.Container>
			<S.Arrow direction='left'>
				<IconShevronLeft />
			</S.Arrow>
			<S.Wrapper>
				<S.Slide>
					<S.ImageContainer>
						<S.Image src='./images/banner_1@2x.jpg' />
					</S.ImageContainer>
					<S.InfoContainer>
						<S.Title>Titlte</S.Title>
						<S.Descr>Description</S.Descr>
					</S.InfoContainer>
					<S.Button>Button</S.Button>
				</S.Slide>
			</S.Wrapper>
			<S.Arrow direction='right'>
				<IconShevronRight />
			</S.Arrow>
		</S.Container>
	);
};
