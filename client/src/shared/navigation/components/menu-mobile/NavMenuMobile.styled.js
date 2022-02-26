import styled from 'styled-components';
import { animationSpeed, color, fontWeight } from '../../../../assets/styles/constants';

export const NavMobileContainer = styled.div`
	height: 110vh;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	overflow-y: hidden;
	background-color: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(5px);
	transition: opacity ${animationSpeed.slow} 50ms ease;
	pointer-events: ${({ isMenuOpen }) => (isMenuOpen ? 'auto' : 'none')};

	opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
`;

export const NavMobileList = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: ${color.black};

	ul {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 30px;
		width: 100%;
	}

	li {
		width: 100%;
		height: 130px;
		margin: 0;
		padding: 0;
		font-size: 1.75rem;
		font-weight: ${fontWeight.inter.l};
		color: ${color.white};

		a {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		svg {
			width: 50px;
			height: 50px;
			g {
				stroke: ${color.white};
			}
		}

		span {
			width: 35px;
			height: 35px;
			font-size: 1.25rem;
			font-weight: ${fontWeight.inter.l};

			color: ${color.black};
			background-color: ${color.white};
		}

		button {
			font-size: 1.75rem;
			font-weight: ${fontWeight.inter.l};
			color: ${color.white};
		}

		&:active,
		&:hover {
			background-color: ${color.silverLight};

			button {
				color: ${color.red};
			}

			span {
				color: ${color.white};
				background-color: ${color.red};
			}
		}
	}
`;
