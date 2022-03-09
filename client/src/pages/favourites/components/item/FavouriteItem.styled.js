import styled from 'styled-components';
import { animationSpeed, color, fonts, fontWeight } from '../../../../assets/styles/constants';

export const Wrapper = styled.div`
	position: relative;
	height: 300px;
	width: 300px;
	display: flex;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 4px 9px 14px rgba(0, 0, 0, 0.1), 0px 0px 30px rgba(0, 0, 0, 0.1);

	transition: box-shadow ${animationSpeed.middle} ease, transform ${animationSpeed.middle} ease;

	&:hover {
		transform: translate(-5px, -5px);
		box-shadow: 5px 5px 14px rgba(0, 0, 0, 0.2), 2px 2px 20px rgba(0, 0, 0, 0.2);
	}

	cursor: pointer;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Content = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 15px;
	gap: 20px;
	background-color: ${color.white};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Price = styled.h3`
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	font-size: 1.5rem;
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 2.5rem;
	border: none;
	background-color: transparent;
	border-radius: 50%;

	color: ${color.red};

	svg {
		fill: ${color.red};
	}

	transition: color 200ms ease, background-color 200ms ease;

	cursor: pointer;

	&:hover {
		color: ${color.grey};

		svg {
			fill: ${color.grey};
		}
	}
`;
