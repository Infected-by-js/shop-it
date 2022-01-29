import styled, { css } from 'styled-components';
import { color, device, fontWeight } from '../../styles/constants';

export const MobileMenuWrapp = styled.nav`
	${({ isShow }) =>
		isShow &&
		css`
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
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

				&:active,
				&:hover {
					background-color: ${color.silverLight};

					span {
						color: ${color.white};

						background-color: ${color.red};
					}
				}
			}
		`}
`;

export const BurgerButton = styled.button`
	display: flex;

	background-color: transparent;
	border: 0;

	&:active {
		g {
			fill: ${color.red};
		}
	}

	@media ${device.laptop} {
		display: none;
	}
`;
