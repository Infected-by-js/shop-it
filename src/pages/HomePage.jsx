import React from 'react';
import styled from 'styled-components';

import { Container } from '../templates/Container';
import { Logo, Search, Navbar, Slider, SortCategory } from '../components';
import { headerHeight } from '../styles/constants';

export const HomePage = () => {
	return (
		<>
			<Container>
				<HeaderContainer>
					<Search />
					<Logo />
					<Navbar />
				</HeaderContainer>
			</Container>
			<Slider />
			<Main>
				<Container>
					<SortCategory />
				</Container>
			</Main>
		</>
	);
};

const HeaderContainer = styled.header`
	height: ${headerHeight};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Main = styled.main`
	margin-top: 35px;
`;
