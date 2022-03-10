import styled from 'styled-components';
import { color, fonts, fontWeight } from '../../../../assets/styles/constants';

export const Wrapper = styled.div`
	position: relative;
	height: 300px;
	width: 300px;
	display: flex;
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	border: 1px solid ${color.greyLight};
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

	font-size: 2.75rem;
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
