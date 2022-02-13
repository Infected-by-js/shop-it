import styled from 'styled-components';
import { animationSpeed, color, device, fonts, fontWeight } from '../../../../styles/constants';

export const Button = styled.button`
	display: flex;
	align-items: center;
	padding: 10px;
	width: auto;

	border: 1px solid ${color.greyLight};
	border-radius: 10px;
	background-color: transparent;

	transition: border-color 100ms ease-in-out;

	&:hover,
	&:focus-visible {
		border-color: ${color.red};

		g {
			fill: ${color.red};
		}

		span {
			color: ${color.red};
		}
	}

	@media ${device.laptop} {
		width: 220px;
	}
`;

export const IconWrapp = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;

	& g {
		fill: ${color.grey};
		transition: fill ${animationSpeed.fast} ease-in-out;
	}
`;

export const Text = styled.span`
	display: none;
	margin-left: 10px;
	font-size: 1.25rem;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.m};
	color: ${color.grey};

	transition: color ${animationSpeed.fast} ease-in-out;

	@media ${device.laptop} {
		display: flex;
	}
`;
