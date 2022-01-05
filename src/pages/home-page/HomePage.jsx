import React from 'react';

import { Container } from '../../templates/Container.jsx';
import { Logo } from '../../components/logo/Logo';
import { Search } from '../../components/search/Search';
import { Navbar } from '../../components/navbar/Navbar';
import { Slider } from '../../components/slider/Slider';
import styled from 'styled-components';
import * as S from './HomePage.styled.js';
import { headerHeight } from '../../styles/constants.js';

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
				<Slider />
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
const Main = styled.main`
	/* max-width: 1920px;
	margin: 0 auto; */
`;
