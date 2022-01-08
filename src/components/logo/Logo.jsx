import React from 'react';
import { Link } from 'react-router-dom';

import * as Styled from './Logo.styled';
import { IconLogo } from '../../assets/images/icons';

export const Logo = ({ color }) => {
	return (
		<Styled.Logo>
			<Link to='/'>
				<IconLogo color={color} />
			</Link>
		</Styled.Logo>
	);
};
