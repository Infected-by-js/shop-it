import styled from 'styled-components';
import { color, device, fonts, fontWeight, TRANSION_MS } from '../../styles/constants';

export const Wrapper = styled.div`
	margin: 0 auto;
	padding: 10px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	max-width: 50%;
	min-width: 350px;

	border: 1px solid ${color.greyLight};
	border-radius: 8px;

	@media ${device.laptop} {
		flex-direction: row;
		max-width: 100%;
	}
`;

export const Image = styled.img`
	margin-right: 10px;
	width: 210px;
	height: 240px;
	object-fit: contain;
	border: 1px solid ${color.silver};
`;

export const Details = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex: 1;
`;

export const TextWrapp = styled.div`
	flex: 1;
`;

export const Text = styled.p`
	margin-bottom: 10px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	font-size: 1.5rem;
	line-height: 1;
`;

export const Price = styled.p`
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.m};
	font-size: 2rem;
	letter-spacing: 1px;
`;

export const RemoveButton = styled.button`
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