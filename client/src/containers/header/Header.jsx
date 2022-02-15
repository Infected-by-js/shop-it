import React from 'react';
import { Container, Logo } from '../../components/';
import { Navigation, SearchBar } from '../';

import { Wrapper, Content } from './Header.styled.js';

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
