import { lighten } from 'polished';
import styled from 'styled-components';
import { color, fonts, TRANSION_MS, fontWeight } from '../../styles/constants';

export const Section = styled.section`
	position: relative;
	width: 450px;
`;
export const BackButton = styled.button`
	position: absolute;
	top: -60px;
	left: 0;

	display: flex;
	align-items: center;
	justify-content: center;

	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	font-size: 1.15rem;
	line-height: 1.25;
	letter-spacing: -5%;
	text-transform: uppercase;
	color: ${color.black};

	border: 0;
	background-color: transparent;

	transition: color ${TRANSION_MS} ease;

	svg {
		width: 28px;
		height: 22px;

		g {
			transition: stroke ${TRANSION_MS} ease;
		}
	}

	&:hover,
	&:focus {
		color: ${color.blue};

		g {
			stroke: ${color.blue};
		}
	}
`;
export const Content = styled.div`
	padding-bottom: 2rem;
	margin-bottom: 1.5rem;
	border-bottom: 0.5px solid ${color.grey};
`;

export const Title = styled.h2`
	margin-bottom: 1rem;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.l};
	font-size: 40px;
	line-height: 48px;

	color: ${color.black};
`;

export const Author = styled.p`
	margin-bottom: 2rem;
	font-family: ${fonts.arsenal};
	font-size: 1.5rem;
	line-height: 25px;
	color: ${color.black};
`;

export const Style = styled.div`
	margin-bottom: 1.75rem;
	display: inline-block;
	font-family: ${fonts.arsenal};
	font-size: 1.25rem;
	line-height: 1.25;
	color: ${color.grey};
`;

export const Description = styled.div`
	font-family: ${fonts.arsenal};
	font-size: 1.25rem;
	line-height: 1.25;

	color: ${color.grey};
`;

export const Footer = styled.div``;

export const Price = styled.div`
	margin-bottom: 1.25rem;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.l};
	font-size: 1.75rem;
	line-height: 2rem;
	color: ${color.black};
`;

export const Info = styled.div`
	margin-bottom: 1rem;
	display: flex;
	align-items: center;

	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	font-size: 0.85rem;
	line-height: 1;
	color: ${color.grey};

	svg {
		margin-right: 0.5rem;

		width: 1rem;
		height: 1rem;
	}
`;

export const AddToCartButton = styled.button`
	width: 100%;
	min-height: 3rem;
	padding: 8px;
	margin-bottom: 1rem;

	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.m};
	font-size: 1rem;
	line-height: 2;
	letter-spacing: 1px;
	text-transform: uppercase;

	color: ${color.white};
	background: ${color.black};
	border-radius: 2px;

	transition: background-color ${TRANSION_MS} ease;

	&:hover,
	&:focus {
		background-color: ${lighten(0.3, color.black)};
	}

	&:active {
		background-color: ${color.black};
	}
`;

export const Text = styled.p`
	text-align: center;
	font-family: ${fonts.inter};
	font-size: 1rem;
	line-height: 2;
	color: ${color.black};
`;
