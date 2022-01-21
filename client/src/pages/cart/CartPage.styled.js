import styled from 'styled-components';
import {
	color,
	device,
	fonts,
	fontWeight,
	headerHeight,
	TRANSION_MS,
} from '../../styles/constants';

export const Wrapper = styled.main``;

export const Title = styled.h1`
	margin-top: ${headerHeight};
	padding-top: 20px;
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
	margin-bottom: 50px;

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
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 40px;
`;

export const ProductsContainer = styled.div`
	width: 100%;
`;

export const SummaryContainer = styled.div`
	position: relative;
`;

export const Placeholder = styled.div`
	font-size: 2rem;
	text-align: center;
`;
