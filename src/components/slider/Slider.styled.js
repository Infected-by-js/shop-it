import styled from 'styled-components';
import { headerHeight, color } from '../../styles/constants';

export const Slider = styled.div`
	width: 100vw;
	height: calc(100vh - ${headerHeight});
	position: relative;
`;

export const SliderTrack = styled.div``;

export const SliderList = styled.div`
	display: flex;
	align-items: center;
`;
export const SliderItem = styled.div`
	object-fit: cover;
	img {
		width: 100vw;
	}
`;

export const ArrowPrev = styled.button`
	width: 80px;
	height: 80px;
	background-color: ${color.white};
	position: absolute;
	top: 50%;
	left: 10px;
	transform: translateY(-50%);
	border-radius: 50%;
`;
export const ArrowNext = styled.button`
	width: 80px;
	height: 80px;
	background-color: ${color.white};
	position: absolute;
	top: 50%;

	right: 10px;
	transform: translateY(-50%);
	border-radius: 50%;
`;
