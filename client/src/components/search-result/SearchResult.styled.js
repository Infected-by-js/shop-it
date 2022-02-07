import styled from 'styled-components';
import { color, fonts, fontWeight } from '../../styles/constants';

export const Wrapp = styled.ul`
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

export const EmptyState = styled.span`
	font-size: 1.5rem;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.m};
	color: ${color.grey};
`;
