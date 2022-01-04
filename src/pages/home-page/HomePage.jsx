import React from 'react';
import * as S from './HomePage.styled.js';

import { Logo } from '../../components/logo/Logo';
import { Search } from '../../components/search/Search';
import { Navbar } from '../../components/navbar/Navbar';
import styled from 'styled-components';
import { Container } from '../../templates/Container.jsx';

export const HomePage = () => {
	return (
		<Container>
			<Header>
				<Search />

				<Logo />

				<Navbar />
			</Header>
		</Container>
	);
};

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 0;
`;
