import styled from 'styled-components';

import { color, fonts, fontWeight, headerHeight, device } from '../../assets/styles/constants';

export const ProductsPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	margin-top: ${headerHeight};
`;

export const Main = styled.main`
	padding-bottom: 80px;
	flex: 1;

	background-color: ${color.white};
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

export const ProductList = styled.div`
	margin-top: 35px;
	display: grid;
	gap: 30px;
	grid-template-columns: 1fr;
	align-items: flex-start;
	justify-items: center;

	@media ${device.tablet} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${device.laptop} {
		grid-template-columns: repeat(3, 1fr);
	}

	@media ${device.laptopL} {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const SkeletonWrapper = styled.div``;
