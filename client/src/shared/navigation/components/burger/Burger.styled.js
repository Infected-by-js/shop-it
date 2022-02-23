import styled from 'styled-components';
import { animationSpeed, color } from '../../../../assets/styles/constants';

export const BurgerButton = styled.button`
	width: 2rem;
	height: 2rem;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	flex-wrap: nowrap;
	position: relative;
	z-index: 1000;

	background-color: transparent;
	border: none;

	span {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ isMenuOpen }) => (isMenuOpen ? color.red : color.black)};
		border-radius: 10px;
		transform-origin: 1px;
		transition: transform ${animationSpeed.middle} linear, opacity ${animationSpeed.middle} linear;

		&:nth-child(1) {
			transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(45deg)' : 'rotate(0)')};
		}
		&:nth-child(2) {
			transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateY(-100%)' : 'translateY(0)')};
			opacity: ${({ isMenuOpen }) => (isMenuOpen ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;
