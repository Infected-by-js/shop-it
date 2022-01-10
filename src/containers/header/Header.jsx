import React from 'react';
import * as Styled from './Header.styled.js';
import { Container, Search, Logo, Navbar } from '../../components/';

export const Header = () => {
	return (
		<Styled.Header>
			<Container>
				<Styled.HeaderContent>
					<Search />
					<Logo />
					<Navbar />
				</Styled.HeaderContent>
			</Container>
		</Styled.Header>
	);
};
