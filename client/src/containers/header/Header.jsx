import React from 'react';
import { Wrapper, Content } from './Header.styled.js';
import { Container, Logo } from '../../components/';
import { Navbar, SearchMenu } from '../';

export const Header = () => {
	return (
		<Wrapper>
			<Container>
				<Content>
					<SearchMenu />
					<Logo />
					<Navbar />
				</Content>
			</Container>
		</Wrapper>
	);
};
