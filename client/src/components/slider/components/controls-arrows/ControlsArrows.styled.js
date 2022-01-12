import styled from 'styled-components';
import { color, device, TRANSION_MS } from '../../../../styles/constants';

export const Wrapper = styled.div`
	padding: 2rem;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	display: none;
	align-items: center;
	justify-content: space-between;

	width: 50%;
	height: 100%;

	opacity: 0;
	transition: opacity ${TRANSION_MS} ease-in-out;

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

	transition: opacity ${TRANSION_MS} ease;
	z-index: 10;

	&:hover,
	&:focus {
		opacity: 1;
	}
`;
