import styled from 'styled-components';
import { color, device, fonts, fontWeight, TRANSION_MS } from '../../styles/constants';

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

	flex-direction: column;

	@media ${device.laptop} {
		flex-direction: row;
	}
`;

export const ProductsList = styled.div`
	flex: 1;
`;

export const Summary = styled.div`
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`;

export const SummaryTitle = styled.h1`
	font-weight: 200;
`;

export const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === 'total' && '500'};
	font-size: ${(props) => props.type === 'total' && '24px'};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
`;
