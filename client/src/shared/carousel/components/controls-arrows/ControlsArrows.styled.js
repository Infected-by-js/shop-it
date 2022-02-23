import styled, { css } from 'styled-components';
import { color, device, animationSpeed } from '../../../../assets/styles/constants';

export const Wrapper = styled.div`
	padding: 2rem;
	position: absolute;
	top: 0;
	bottom: 0;
	display: none;
	align-items: center;
	justify-content: space-between;

	height: 100%;

	${({ position }) => {
		switch (position) {
			case 'left':
				return css`
					left: 0;
					width: 50%;
				`;
			case 'right':
				return css`
					right: 0;
					width: 50%;
				`;
			default:
				return css`
					left: 0;
					width: 100%;
				`;
		}
	}}

	opacity: 0;
	transition: opacity ${animationSpeed.fast} ease-in-out;

	&:hover {
		opacity: 1;
	}

	&:focus-within {
		opacity: 1;
	}

	@media ${device.tablet} {
		display: flex;
	}
`;

export const Arrow = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 70px;
	height: 70px;
	background-color: ${color.white};
	border: 0;

	border-radius: 50%;
	opacity: 0.6;

	transition: opacity ${animationSpeed.fast} ease;
	z-index: 10;

	&:hover,
	&:focus {
		opacity: 1;
	}
`;
