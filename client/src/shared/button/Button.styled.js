import styled, { css } from 'styled-components';
import { animationSpeed, color, fonts, fontWeight } from '../../assets/styles/constants';
import { lighten } from 'polished';

export const StyledButton = styled.button`
	padding: 15px 20px;
	display: flex;
	align-items: center;
	justify-content: center;

	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.m};
	border: 2px solid transparent;
	border-radius: 2px;

	color: ${color.white};
	background-color: ${color.black};

	cursor: pointer;
	transition: color ${animationSpeed.middle} ease, background-color ${animationSpeed.middle} ease;

	&:hover,
	&:focus-visible {
		background-color: ${lighten(0.3, color.black)};
	}

	&:disabled {
		background-color: ${lighten(0.5, color.black)};
		cursor: not-allowed;
	}

	${({ outlined }) =>
		outlined &&
		css`
			color: ${color.black};
			border: 2px solid ${color.black};
			background-color: transparent;

			&:hover {
				color: ${color.white};
				background-color: ${color.black};
			}
		`}

	${({ lighten }) =>
		lighten &&
		css`
			color: ${color.white};
			border: 2px solid ${color.red};
			background-color: ${color.red};

			&:hover {
				color: ${color.black};
				border: 2px solid ${color.black};
				background-color: ${color.red};
			}
		`}
`;
