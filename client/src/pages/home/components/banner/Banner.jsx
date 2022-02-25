import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../shared';
import { Wrapper, InfoContainer, Title, Description, Image, ImageContainer } from './Banner.styled';

export const Banner = ({ imageSrc, title, description, buttonLabel, href }) => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/${href}`);
	};

	return (
		<Wrapper>
			<InfoContainer>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<Button onClick={handleNavigate}>{buttonLabel}</Button>
			</InfoContainer>

			<ImageContainer>
				<Image src={imageSrc} draggable='false' />
			</ImageContainer>
		</Wrapper>
	);
};
