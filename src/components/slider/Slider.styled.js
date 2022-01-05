import { borderRadius } from 'polished';
import styled from 'styled-components';
import { headerHeight, color, TRANSION_MS } from '../../styles/constants';

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	display: flex;
`;

export const Arrow = styled.button`
	position: absolute;
	top: 0;
	left: ${({ direction }) => direction === 'left' && '20px'};
	right: ${({ direction }) => direction === 'right' && '20px'};
	bottom: 0;
	margin: auto;
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

	&:hover {
		opacity: 1;
	}
`;

export const Wrapper = styled.div``;
export const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
`;
export const ImageContainer = styled.div`
	height: 100%;
	flex: 1;
`;

export const Image = styled.img`
	height: 80%;
`;
export const InfoContainer = styled.div`
	flex: 1;
`;

export const Title = styled.h1``;
export const Descr = styled.p``;

export const Button = styled.button``;
