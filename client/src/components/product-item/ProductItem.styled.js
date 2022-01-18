import { lighten } from 'polished';
import styled, { css } from 'styled-components';
import { TRANSION_MS, color, device } from '../../styles/constants';

export const Wrapper = styled.div`
	position: relative;
	width: 320px;
	height: 460px;
	border-radius: 15px;

	background-color: ${color.white};
	box-shadow: 1px 2px 6px ${lighten(0.5, color.grey)};

	overflow: hidden;
	cursor: pointer;

	@media ${device.laptop} {
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-position: center center;
	object-fit: cover;
`;

export const ButtonsWrapper = styled.div`
	position: absolute;
	opacity: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;

	border-radius: 15px;

	background-color: rgba(0, 0, 0, 0.5);
	transition: all ${TRANSION_MS} ease;

	${Wrapper}:hover &,
		${Wrapper}:focus-within & {
		opacity: 1;
	}
`;

export const Button = styled.button`
	width: 80px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0.6;
	border: 0;
	border-radius: 50%;
	background-color: ${color.white};

	svg {
		width: 50%;
		height: 50%;

		g {
			stroke: ${color.black};
		}
	}

	${({ active }) =>
		active &&
		css`
			svg g {
				fill: ${color.blue};
				stroke: ${color.blue};
			}
		`}

	&:hover,
	&:focus {
		opacity: 1;
	}

	@media ${device.laptop} {
		width: 60px;
		height: 60px;
	}
`;
