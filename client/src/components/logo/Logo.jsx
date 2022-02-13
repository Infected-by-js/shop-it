import React from 'react';
import { Link } from 'react-router-dom';

import { IconLogo } from '../../assets/images/icons';
import { Wrapper } from './Logo.styled';

export const Logo = () => {
	return (
		<Wrapper>
			<Link to='/'>
				<IconLogo />
			</Link>
		</Wrapper>
	);
};
