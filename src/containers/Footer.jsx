import React from 'react';
import styled from 'styled-components';
import { Logo } from '../components';
import { color, TRANSION_MS } from '../styles/constants';

export const Footer = () => {
	return (
		<Wrapper>
			<Logo color={color.white} />
			<CopyrightLink>© Copyright 2022, Designed and coded with 💙 by Infected-by-js</CopyrightLink>
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	padding: 30px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
	background-color: ${color.black};
`;

const CopyrightLink = styled.a.attrs({
	href: 'https://github.com/Infected-by-js',
})`
	color: ${color.white};

	transition: color ${TRANSION_MS} ease;

	&:hover {
		color: ${color.blue};
	}
`;
