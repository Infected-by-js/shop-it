import React from 'react';

import { Link, LogoStyled } from './Logo.styled';
import MainLogo from '../../assets/images/logo.svg';

export const Logo = () => {
	return (
		<Link to='/'>
			<LogoStyled src={MainLogo} />
		</Link>
	);
};
