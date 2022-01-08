import React from 'react';
import * as Styled from './Content.styled';

export const Content = ({ imageSrc, title, description, buttonLabel, isActiveSlide }) => {
	return (
		<Styled.Content>
			<Styled.InfoContainer>
				<Styled.Title>{title}</Styled.Title>
				<Styled.Description>{description}</Styled.Description>
				<Styled.Button tabIndex={isActiveSlide ? 0 : -1}>{buttonLabel}</Styled.Button>
			</Styled.InfoContainer>

			<Styled.Image src={imageSrc} />
		</Styled.Content>
	);
};
