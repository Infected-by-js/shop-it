import React from 'react';
import * as Styled from './Info.styled.js';

import { IconDelivery, IconLocation, IconArrowLeft } from '../../assets/images/icons/';

export const Info = () => {
	return (
		<Styled.Section>
			<Styled.BackButton>
				<IconArrowLeft />
				Back
			</Styled.BackButton>
			<Styled.Content>
				<Styled.Title>title (2021)</Styled.Title>
				<Styled.Author>Author</Styled.Author>
				<Styled.Style>style, size</Styled.Style>
				<Styled.Description>description</Styled.Description>
			</Styled.Content>
			<Styled.Footer>
				<Styled.Price>$620</Styled.Price>
				<Styled.Info>
					<IconLocation />
					<p> Ships from New York, NY, USA</p>
				</Styled.Info>
				<Styled.Info>
					<IconDelivery />
					<p>Estimated to ship in 3 - 7 days within USA</p>
				</Styled.Info>
				<Styled.AddToCartButton>Add to cart</Styled.AddToCartButton>
				<Styled.Text>Taxes and shipping fees will apply upon checkout</Styled.Text>
			</Styled.Footer>
		</Styled.Section>
	);
};
