import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from './Logo.styled';
import { IconLogo } from '../../assets/images/icons';

export const Logo = ({ color }) => {
	return (
		<Wrapper>
			<Link to='/'>
				<IconLogo color={color} />
			</Link>
		</Wrapper>
	);
};
