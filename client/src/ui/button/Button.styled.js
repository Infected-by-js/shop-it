import styled, { css } from 'styled-components';
import { animationSpeed, color, fonts, fontWeight } from '../../styles/constants';
import { lighten } from 'polished';

export const StyledButton = styled.button`
	padding: 15px 20px;
	display: flex;
	align-items: center;
	justify-content: center;

	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.m};
	border: 1px solid transparent;
	border-radius: 2px;

	color: ${color.white};
	background-color: ${color.black};
	box-shadow: 0.5px 0.5px 2px ${lighten(0.65, color.black)};

	cursor: pointer;
	transition: color ${animationSpeed.fast} ease, background-color ${animationSpeed.fast} ease;

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
			border: 1px solid ${color.black};
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
			border: 1px solid ${color.red};
			background-color: ${color.red};

			&:hover {
				color: ${color.black};
				border: 1px solid ${color.black};
				background-color: ${color.red};
			}
		`}
`;
