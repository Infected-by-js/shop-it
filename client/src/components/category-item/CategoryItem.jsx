import React from 'react';
import { Wrapper, Image, Title } from './CategoryItem.styled';

export const CategoryItem = ({ imageSrc, title, ...rest }) => {
	return (
		<Wrapper {...rest}>
			<Image src={imageSrc} />
			<Title>{title}</Title>
		</Wrapper>
	);
};
