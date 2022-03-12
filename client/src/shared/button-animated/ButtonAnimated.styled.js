import styled, { css } from 'styled-components';
import { animationSpeed, color, device } from '../../assets/styles/constants';

export const Wrapp = styled.div`
	border-radius: 50%;
	${({ isActive }) =>
		isActive &&
		css`
			button {
				background-color: ${color.red};

				svg {
					color: ${color.white};
				}
			}
		`}
`;

export const ButtonStyled = styled.button`
	position: relative;
	width: 80px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 1;
	border: 0;
	border-radius: 50%;
	background-color: ${color.white};
	transition: background-color ${animationSpeed.middle} ease;

	svg {
		width: 50%;
		height: 50%;

		transition: color ${animationSpeed.middle} ease;
	}

	&:focus-visible {
		border: 2px solid ${color.black};
	}

	@media ${device.laptop} {
		width: 70px;
		height: 70px;
	}
`;
