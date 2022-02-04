import styled from 'styled-components';
import { color, device, fonts, fontWeight, TRANSION_MS } from '../../styles/constants';

export const Wrapper = styled.div`
	margin: 0 auto;
	padding: 10px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	width: 320px;

	border: 1px solid ${color.greyLight};
	border-radius: 8px;

	@media ${device.laptop} {
		flex-direction: row;
		width: 100%;
		margin: 0;
	}
`;

export const Image = styled.img`
	margin-right: 10px;
	width: 210px;
	height: 240px;
	object-fit: contain;
`;

export const Details = styled.div`
	padding: 10px 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex: 1;
	height: 100%;
`;

export const TextWrapp = styled.div`
	flex: 1;

	a {
		transition: color ${TRANSION_MS} ease;
	}

	a:hover {
		color: ${color.red};
	}
`;

export const Text = styled.p`
	margin-bottom: 10px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	font-size: 1.2rem;
	line-height: 1;
`;

export const Price = styled.p`
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.m};
	font-size: 1.5rem;
	letter-spacing: 1px;
`;

export const RemoveButton = styled.button`
	margin-top: auto;
	padding: 5px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	font-size: 1rem;
	color: ${color.red};

	background-color: transparent;
	cursor: pointer;

	transition: color ${TRANSION_MS} ease, background-color ${TRANSION_MS} ease;

	&:hover {
		color: ${color.white};
		background-color: ${color.red};
	}
`;
