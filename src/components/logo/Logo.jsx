import React from 'react';
import * as S from './Logo.styled.js';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export const Logo = () => {
	return (
		<S.Logo>
			<Link to='/'>
				<img src={logo} alt='shop-it logo' />
			</Link>
		</S.Logo>
	);
};
