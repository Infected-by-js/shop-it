import styled from 'styled-components';
import { darken } from 'polished';
import { color, fonts, fontWeight } from '../../styles/constants';

export const Main = styled.main`
	padding-top: 35px;
	padding-bottom: 110px;

	background-color: ${darken(0.03, color.white)};
`;

export const MainTitle = styled.h1`
	margin-bottom: 20px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	text-align: center;
	text-transform: uppercase;
`;
