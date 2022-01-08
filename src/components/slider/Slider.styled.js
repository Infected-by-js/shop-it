import styled from 'styled-components';

export const Slider = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const Track = styled.div`
	transition: transform 800ms ease;
	transform: translateX(${({ slideIndex }) => slideIndex * -100}vw);
	z-index: 10;
`;
export const SliderList = styled.ul`
	display: flex;
`;
