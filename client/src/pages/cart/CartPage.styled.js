import styled from 'styled-components';
import {
	color,
	device,
	fonts,
	fontWeight,
	headerHeight,
	animationSpeed,
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
			transition: fill ${animationSpeed.fast} ease;
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
