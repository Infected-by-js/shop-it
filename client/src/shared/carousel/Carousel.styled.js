import styled from 'styled-components';
import { color, device, headerHeight } from '../../assets/styles/constants';
import { darken } from 'polished';

export const Wrapper = styled.div`
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
export const CarouselList = styled.ul`
	display: flex;
`;

export const CarouselItem = styled.li`
	position: relative;
	width: ${({ width }) => (width ? `${width}px` : '100vw')};
	height: ${({ height }) => (height ? `${height}px` : `calc(100vh - ${headerHeight})`)};
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex-shrink: 0;
	z-index: 10;
	-webkit-transform: translate3d(0, 0, 0);

	background-color: ${darken(0.03, color.white)};

	@media ${device.tablet} {
		flex-direction: row;
	}
`;
