import React from 'react';
import * as Styled from './Footer.styled';

import { Logo, Copyright } from '../../components';
import { color } from '../../styles/constants';

export const Footer = () => {
	return (
		<Styled.Footer>
			<Logo color={color.white} />
			<Copyright />
		</Styled.Footer>
	);
};
