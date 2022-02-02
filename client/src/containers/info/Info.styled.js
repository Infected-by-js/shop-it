import styled from 'styled-components';
import { color, fonts, TRANSION_MS, fontWeight } from '../../styles/constants';

export const Section = styled.section`
	position: relative;
	max-width: 450px;
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
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.l};
	font-size: 1.75rem;
	line-height: 2rem;
	color: ${color.black};
`;

export const DeliveryInfo = styled.div`
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

export const HelperText = styled.p`
	text-align: center;
	font-family: ${fonts.inter};
	font-size: 0.8rem;
	line-height: 2;
	color: ${color.black};
`;
