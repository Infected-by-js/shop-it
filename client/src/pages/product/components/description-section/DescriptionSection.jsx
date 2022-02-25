import React from 'react';
import { Wrapper, Header, Text, Row } from './DescriptionSection.styled';

export const DescriptionSection = () => {
	return (
		<Wrapper>
			<Row>
				<Header>title</Header>
				<Header>$18</Header>
			</Row>
			<Row>
				<Text>Author</Text>
				<Text>1203</Text>
			</Row>
			<Text>size</Text>
			<Text>
				Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue &
				red ribbom and butterfly pick.
			</Text>
		</Wrapper>
	);
};
