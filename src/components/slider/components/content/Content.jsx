import React from 'react';
import { Button } from '../../../../ui/Button';
import { Wrapper, InfoContainer, Title, Description, Image } from './Content.styled';

export const Content = ({ imageSrc, title, description, buttonLabel, isActiveSlide }) => {
	return (
		<Wrapper>
			<InfoContainer>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<Button tabIndex={isActiveSlide ? 0 : -1}>{buttonLabel}</Button>
			</InfoContainer>

			<Image src={imageSrc} />
		</Wrapper>
	);
};
