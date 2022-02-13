import React from 'react';
import { Wrapper, Content } from './Header.styled.js';
import { Container, Logo } from '../../components/';
import { Navigation, SearchBar } from '../';

export const Header = () => {
	return (
		<Wrapper>
			<Container>
				<Content>
					<SearchBar />
					<Logo />
					<Navigation />
				</Content>
			</Container>
		</Wrapper>
	);
};
