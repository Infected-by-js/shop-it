import { lighten } from 'polished';
import styled from 'styled-components';
import { fonts, fontWeight, TRANSION_MS, color } from '../../styles/constants';

export const ProductCard = styled.div`
	position: relative;
	width: 290px;
	display: flex;
	flex-direction: column;
	border-radius: 15px;

	border: 1px solid ${color.white};
	background-color: ${color.white};
	box-shadow: 1px 2px 6px ${lighten(0.5, color.grey)};

	overflow: hidden;
	cursor: pointer;
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
	max-height: 400px;
	object-fit: contain;
`;

export const InfoWrapp = styled.div`
	padding: 10px 25px 15px;
`;

export const Author = styled.h2`
	margin-bottom: 3px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.m};
	font-size: 1.1rem;
	line-height: 1.5;
	letter-spacing: -5%;
	color: ${color.black};
`;
export const Style = styled.p`
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	font-size: 0.9rem;
	line-height: 1.5;
	letter-spacing: -5%;
	color: ${color.grey};
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

	background-color: rgba(0, 0, 0, 0.5);

	transition: all ${TRANSION_MS} ease;

	${ProductCard}:hover &,
	${ProductCard}:focus-within & {
		opacity: 1;
	}
	border-radius: 15px;
`;

export const Button = styled.button`
	width: 50px;
	height: 50px;
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
		fill: ${color.black};
	}

	&:hover,
	&:focus {
		opacity: 1;
	}
`;
