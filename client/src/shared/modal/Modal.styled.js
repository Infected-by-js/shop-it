import styled from 'styled-components/';

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	padding: 30px;
	z-index: 100;

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
	background-color: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(5px);
	cursor: pointer;
`;

export const Content = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	border: none;
	z-index: 2;

	min-width: 300px;
	min-height: 200px;
	background-color: white;
	border-radius: 10px;
`;
