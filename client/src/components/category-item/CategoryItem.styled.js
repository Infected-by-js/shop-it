import styled from 'styled-components';
import { fonts, fontWeight } from '../../styles/constants';

export const Wrapper = styled.div`
	position: relative;
	height: 500px;
	width: 500px;
	border-radius: 40px;
	opacity: 0.5;
	transition: opacity 200ms ease;

	&:hover {
		opacity: 1;
	}
	overflow: hidden;
	cursor: pointer;
`;
export const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;
export const Title = styled.h3`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 2rem;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	text-align: center;
	text-transform: uppercase;
`;
