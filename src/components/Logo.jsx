import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { TRANSION_MS } from '../styles/constants';
import { IconLogo } from '../assets/images/icons';

export const Logo = ({ color }) => {
	return (
		<LogoWrapper>
			<Link to='/'>
				<IconLogo color={color} />
			</Link>
		</LogoWrapper>
	);
};

const LogoWrapper = styled.div`
	transition: transform ${TRANSION_MS} ease;

	&:hover,
	&:focus-within {
		transform: scale(1.05);
	}
`;
