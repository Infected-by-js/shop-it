import React from 'react';

import { Logo, Copyright } from '../../components';
import { color } from '../../styles/constants';
import { Wrapper } from './Footer.styled';

export const Footer = () => {
	return (
		<Wrapper>
			<Logo color={color.white} />
			<Copyright />
		</Wrapper>
	);
};
