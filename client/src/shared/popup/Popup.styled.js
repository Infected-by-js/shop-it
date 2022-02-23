import styled from 'styled-components';
import { color } from '../../assets/styles/constants';

export const PopupContainer = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 30px;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: transparent;
	cursor: pointer;
`;

export const Content = styled.div`
	position: absolute;
	top: ${(p) => p.top || 0}px;
	left: ${(p) => p.left || 0}px;

	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px;
	background-color: ${color.white};
	border: none;
	border-radius: 6px;
	box-shadow: 1px 2px 4px -7px ${color.grey};
	z-index: 2;
`;
