import styled from 'styled-components';
import { color, headerHeight } from '../../styles/constants';

export const Wrapper = styled.header`
	background-color: ${color.white};
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	will-change: transform;
`;
export const Content = styled.header`
	height: ${headerHeight};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
