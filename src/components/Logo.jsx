import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { TRANSION_MS } from '../styles/constants';
import logo from '../assets/images/logo.svg';

export const Logo = () => {
	return (
		<LogoContainer>
			<Link to='/'>
				<img src={logo} alt='shop-it logo' />
			</Link>
		</LogoContainer>
	);
};

const LogoContainer = styled.div`
	transition: transform ${TRANSION_MS} ease;

	&:hover,
	&:focus-within {
		transform: scale(1.05);
	}
`;
