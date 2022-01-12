import styled from 'styled-components';
import { color, device, fonts, fontWeight, TRANSION_MS } from '../../styles/constants';

export const Wrapper = styled.main``;

export const Title = styled.h1`
	margin-bottom: 20px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	text-align: center;
	text-transform: uppercase;
`;

export const ButtonsWrapp = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 50px;
	padding-bottom: 50px;
	border-bottom: 1px solid ${color.silverLight};

	svg {
		width: 8px;
		height: 14px;

		g {
			transition: fill ${TRANSION_MS} ease;
		}
	}

	button {
		padding: 10px;
		gap: 5px;
		&:hover {
			svg g {
				fill: ${color.white};
			}
		}

		@media ${device.tablet} {
			padding: 15px 20px;
		}
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
