import React from 'react';
import * as Styled from './Header.styled.js';
import { Container, Search, Logo, Navbar } from '../../components/';

export const Header = () => {
	return (
		<Container>
			<Styled.Header>
				<Search />
				<Logo />
				<Navbar />
			</Styled.Header>
		</Container>
	);
};
