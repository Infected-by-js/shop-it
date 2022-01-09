import styled from 'styled-components';
import { color, device, fonts, fontWeight, TRANSION_MS } from '../../styles/constants';

export const Wrapper = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;

	@media ${device.laptop} {
		flex-direction: row;
	}
`;

export const Image = styled.img`
	margin-right: 10px;
	width: 200px;
	height: 170px;
	object-fit: contain;
`;

export const Info = styled.div`
	display: flex;
`;
export const Details = styled.div`
	flex: 1;
`;

export const Text = styled.p`
	margin-bottom: 10px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	font-size: 1rem;
	line-height: 1;
`;

export const PriceWrapp = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const Price = styled.p`
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.m};
	font-size: 1.75rem;
`;

export const RemoveButton = styled.button`
	padding: 10px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	font-size: 1rem;
	color: ${color.black};
	border: 1px solid ${color.black};
	background-color: transparent;
	cursor: pointer;

	transition: color ${TRANSION_MS} ease, background-color ${TRANSION_MS} ease;

	&:hover {
		color: ${color.white};
		background-color: ${color.black};
	}
`;
