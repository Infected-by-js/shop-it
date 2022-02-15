import styled from 'styled-components';
import { animationSpeed, color, device, fonts, fontWeight } from '../../../../styles/constants';

export const NavList = styled.ul`
	display: none;
	align-items: center;

	@media ${device.laptop} {
		display: flex;
	}
`;

export const NavItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 30px;

	font-size: 1.25rem;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	text-transform: uppercase;

	&:last-child {
		margin-right: 0;
	}

	a {
		display: inline-block;
		height: 100%;
		width: 100%;
		padding: 20px 0;
		border-radius: 8px;
		transition: color ${animationSpeed.middle} ease-in-out;

		&:hover,
		&:focus {
			color: ${color.red};

			& g {
				stroke: ${color.red};
			}
		}
	}

	svg {
		width: 26px;
		height: 22px;
	}

	& g {
		transition: stroke ${animationSpeed.middle} ease-in-out;
	}

	&:hover,
	&:focus-visible {
		& g {
			stroke: ${color.red};
		}
	}
`;
