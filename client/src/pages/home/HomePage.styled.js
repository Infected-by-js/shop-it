import styled from 'styled-components';
import { color, device, headerHeight } from '../../assets/styles/constants';

export const Main = styled.main``;
export const Hero = styled.div`
	min-height: 100vh;
	width: 100%;
	padding: 100px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;
export const BgVideo = styled.video`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	object-fit: cover;
`;
export const Overlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled.div`
	margin-top: ${headerHeight};
	padding-bottom: 80px;
`;

export const Column = styled.section``;
