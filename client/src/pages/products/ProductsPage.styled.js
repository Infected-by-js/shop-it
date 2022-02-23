import styled from 'styled-components';
import { darken } from 'polished';
import { color, fonts, fontWeight, headerHeight, device } from '../../assets/styles/constants';

export const ProductsPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

export const Main = styled.main`
	margin-top: ${headerHeight};
	padding-bottom: 80px;
	flex: 1;

	background-color: ${darken(0.03, color.white)};
`;

export const MainTitle = styled.h1`
	margin: 30px 0;
	font-size: 1.25rem;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	text-align: center;
	text-transform: uppercase;

	@media ${device.tablet} {
		font-size: 1.5rem;
	}

	@media ${device.laptop} {
		font-size: 2rem;
	}
`;
