import styled from 'styled-components';
import { color, fonts, fontWeight, animationSpeed } from '../../../../assets/styles/constants';

export const Wrapper = styled.div`
	position: relative;
	width: 300px;
	height: 300px;
	border-radius: 40px;
	opacity: 0.8;

	box-shadow: 1px 2px 4px ${color.greyLight};
	transition: opacity ${animationSpeed.fast} ease, box-shadow ${animationSpeed.fast} ease;

	&:hover {
		opacity: 1;
		box-shadow: 1px 2px 4px ${color.grey};
	}
	overflow: hidden;
	cursor: pointer;
`;
export const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	filter: brightness(0.5);
`;
export const Title = styled.h3`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 2rem;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.m};
	color: ${color.white};
	text-align: center;
	text-transform: uppercase;
`;
