import React from 'react';
import styled from 'styled-components';

export const Slide = ({ imageSrc, title, description }) => {
	return (
		<Container>
			<Image src={imageSrc} />
			<InfoWrapp>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</InfoWrapp>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
`;

const InfoWrapp = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const Title = styled.h1`
	margin: 0 0 20px 0;
`;
const Description = styled.p``;
