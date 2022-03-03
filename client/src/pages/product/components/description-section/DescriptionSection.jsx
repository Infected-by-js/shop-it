import React from 'react';
import { Wrapper, Header, Text, Row } from './DescriptionSection.styled';

export const DescriptionSection = ({ title, price, author, year_created, size, description }) => {
	return (
		<Wrapper>
			<Row>
				<Header>{title}</Header>
				<Header>${price}</Header>
			</Row>
			<Row>
				<Text>{author}</Text>
				<Text>{year_created}</Text>
			</Row>
			<Text>{size}</Text>
			<Text>{description}</Text>
		</Wrapper>
	);
};
