import styled from 'styled-components';
import { animationSpeed, color, fonts, fontWeight } from '../../../../assets/styles/constants';

export const NavMenuItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 1.25rem;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	text-transform: capitalize;

	a {
		display: inline-block;
		height: 100%;
		width: 100%;
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
		width: 32px;
		height: 32px;

		g {
			stroke: ${color.black};
		}
	}

	& g {
		transition: stroke ${animationSpeed.middle} ease-in-out;
	}
`;
