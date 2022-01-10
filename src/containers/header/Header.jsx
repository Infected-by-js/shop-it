import React from 'react';
import { Wrapper, Content } from './Header.styled.js';
import { Container, Search, Logo, Navbar } from '../../components/';

export const Header = () => {
	return (
		<Wrapper>
			<Container>
				<Content>
					<Search />
					<Logo />
					<Navbar />
				</Content>
			</Container>
		</Wrapper>
	);
};
