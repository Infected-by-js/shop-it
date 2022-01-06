import React from 'react';

import { Container } from '../../templates/Container.jsx';
import { Logo } from '../../components/logo/Logo';
import { Search } from '../../components/search/Search';
import { Navbar } from '../../components/navbar/Navbar';
import { Slider } from '../../components/slider/Slider';
import styled from 'styled-components';
import * as S from './HomePage.styled.js';
import { headerHeight, color } from '../../styles/constants.js';
import { Carousel } from '../../components/carousel/Carousel.jsx';

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

export const HomePage = () => {
	return (
		<>
			<Container>
				<Header>
					<Search />
					<Logo />
					<Navbar />
				</Header>
			</Container>
			<Main>
				<Slider infinite autoplay />
			</Main>
		</>
	);
};

const Header = styled.header`
	height: ${headerHeight};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Main = styled.main``;

const Item = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	user-select: none;

	background-image: url(${({ bg }) => bg});
`;
