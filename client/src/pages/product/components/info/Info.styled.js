import styled, { css } from 'styled-components';
import { color, fonts, animationSpeed, fontWeight } from '../../../../assets/styles/constants';

export const Section = styled.section`
	position: relative;
	max-width: 450px;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 40px;
	padding: 0 10px;
`;

export const BackButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.m};
	font-size: 1.25rem;
	line-height: 1.25;
	letter-spacing: -5%;
	text-transform: uppercase;
	color: ${color.black};

	border: 0;
	background-color: transparent;

	transition: color ${animationSpeed.fast} ease;

	svg {
		width: 28px;
		height: 22px;

		g {
			transition: stroke ${animationSpeed.fast} ease;
		}
	}

	&:hover,
	&:focus {
		color: ${color.red};

		g {
			stroke: ${color.red};
		}
	}
`;

export const FavouriteButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: transparent;
	border: 0;
	border-radius: 8px;
	transition: background-color ${animationSpeed.fast} ease-in-out;
	cursor: pointer;

	svg {
		width: 38px;
		height: 32px;
	}

	& g {
		transition: stroke ${animationSpeed.fast} ease-in-out, fill ${animationSpeed} ease-in-out;
	}

	&:hover,
	&:focus-visible {
		& g {
			stroke: ${color.red};
			fill: ${color.red};
		}
	}

	${({ isActive }) =>
		isActive &&
		css`
			svg g {
				fill: ${color.red};
				stroke: ${color.red};
			}
		`}
`;

export const Main = styled.main`
	padding-bottom: 1rem;
	margin-bottom: 1.5rem;
	border-bottom: 0.5px solid ${color.grey};
`;

export const Title = styled.h2`
	margin-bottom: 1rem;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.l};
	font-size: 32px;
	line-height: 40px;

	color: ${color.black};
`;

export const Description = styled.p`
	margin-bottom: 1rem;
	font-family: ${fonts.arsenal};
	font-size: 1.15rem;
	line-height: 1;
	color: ${color.grey};
`;

export const Footer = styled.div`
	button {
		width: 100%;
		margin-bottom: 10px;
	}
`;

export const Price = styled.div`
	margin-bottom: 1rem;
	text-align: right;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.l};
	font-size: 2.25rem;
	line-height: 2rem;
	color: ${color.black};
`;

export const DeliveryInfo = styled.div`
	margin-bottom: 1rem;
	display: flex;
	align-items: center;

	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.s};
	font-size: 0.85rem;
	line-height: 1;
	color: ${color.grey};

	svg {
		margin-right: 0.5rem;

		width: 1rem;
		height: 1rem;
	}
`;

export const HelperText = styled.p`
	text-align: center;
	font-family: ${fonts.arsenal};
	font-size: 0.8rem;
	line-height: 2;
	color: ${color.black};
`;
