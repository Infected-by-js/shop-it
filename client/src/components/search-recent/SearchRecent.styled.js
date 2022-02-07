import styled from 'styled-components';
import { color, fonts, fontWeight, TRANSION_MS } from '../../styles/constants';

export const Wrapp = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	flex: 1;
	width: 100%;
	margin: 10px 0;
	padding: 0 20px;

	overflow-y: auto;
	overflow-x: hidden;
`;

export const Title = styled.h3`
	text-align: center;
	font-size: 1.75rem;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	color: ${color.grey};
`;

export const EmptyState = styled.span`
	font-size: 1.5rem;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.m};
	color: ${color.grey};
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;
`;

export const Image = styled.img`
	width: 140px;
	height: 140px;

	border-radius: 50%;
	opacity: 0.7;
	cursor: pointer;

	transition: opacity ${TRANSION_MS} ease, transform ${TRANSION_MS} ease,
		border-radius ${TRANSION_MS} ease;

	box-shadow: 1px 2px 2px ${color.greyLight};

	&:hover {
		transform: scale(1.1);
		border-radius: 10px;
		opacity: 1;
	}
`;
