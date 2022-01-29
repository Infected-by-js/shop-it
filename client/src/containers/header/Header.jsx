import React from 'react';
import { Wrapper, Content } from './Header.styled.js';
import { Container, Search, Logo } from '../../components/';
import { Navbar } from '../navbar/Navbar';

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
