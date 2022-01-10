import styled from 'styled-components';
import { color, device, fonts, fontWeight, TRANSION_MS } from '../../styles/constants';
import { darken } from 'polished';

export const CartPage = styled.main`
	background-color: ${darken(0.03, color.white)};
`;

export const Title = styled.h1`
	margin-bottom: 20px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	text-align: center;
	text-transform: uppercase;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 50px;
	padding-bottom: 50px;
	border-bottom: 1px solid ${color.silverLight};
`;

export const HeaderButton = styled.button`
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	font-size: 1rem;
	color: ${color.black};
	border: 1px solid ${color.black};
	background-color: transparent;
	cursor: pointer;

	transition: color ${TRANSION_MS} ease, background-color ${TRANSION_MS} ease;

	&:hover {
		color: ${color.white};
		background-color: ${color.black};

		svg g {
			fill: ${color.white};
		}
	}

	svg {
		width: 8px;
		height: 14px;

		g {
			transition: fill ${TRANSION_MS} ease;
		}
	}
`;

export const HeaderTexts = styled.div`
	display: none;
	align-items: center;
	justify-content: center;

	@media ${device.tablet} {
		display: flex;
	}
`;

export const HeaderText = styled.span`
	margin: 0px 10px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	font-size: 1.1rem;

	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 50px;
	padding: 0 10px;

	flex-direction: column;

	@media ${device.laptop} {
		flex-direction: row;
	}
	@media ${device.laptopL} {
		max-width: 80%;
		margin: 0 auto;
	}
`;

export const ProductsList = styled.div`
	flex: 1;
`;
