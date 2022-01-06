import React, { useContext } from 'react';
import styled from 'styled-components';
import { CarouselContext } from '../carousel-context';

export const Page = ({ children }) => {
	const { width } = useContext(CarouselContext);
	return <Container width={width}>{children}</Container>;
};

const Container = styled.div`
	height: 100%;
	min-width: ${({ width }) => width}px;
	max-width: ${({ width }) => width}px;
`;
