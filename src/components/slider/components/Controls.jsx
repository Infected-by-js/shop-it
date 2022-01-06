import React from 'react';

import styled from 'styled-components';
import { IconShevronLeft, IconShevronRight } from '../../../assets/icons';
import { color, TRANSION_MS } from '../../../styles/constants';

export const Controls = ({ onLeft, onRight, ...props }) => {
	return (
		<Container {...props}>
			<Arrow onClick={onLeft}>
				<IconShevronLeft />
			</Arrow>
			<Arrow onClick={onRight}>
				<IconShevronRight />
			</Arrow>
		</Container>
	);
};

const Container = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem;

	width: 100%;
	height: 100%;

	opacity: 0;
	transition: opacity ${TRANSION_MS} ease-in-out;

	&:hover {
		opacity: 1;
	}

	&:focus-within {
		opacity: 1;
	}
`;

const Arrow = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 70px;
	height: 70px;
	background-color: ${color.white};
	border: 0;

	border-radius: 50%;
	opacity: 0.6;

	transition: opacity ${TRANSION_MS} ease;
	z-index: 10;

	&:hover,
	&:focus {
		opacity: 1;
	}
`;
