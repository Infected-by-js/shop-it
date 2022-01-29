import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Image, Title } from './CategoryItem.styled';

export const CategoryItem = ({ imageSrc, title, url, ...rest }) => {
	return (
		<Wrapper {...rest}>
			<Link to={url}>
				<Image src={imageSrc} />
				<Title>{title}</Title>
			</Link>
		</Wrapper>
	);
};
