import React from 'react';
import styled from 'styled-components';
import { Logo } from '.';
import { color } from '../styles/constants';

export const Footer = () => {
	return (
		<Wrapper>
			<Logo color={color.white} />
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${color.black};
`;
