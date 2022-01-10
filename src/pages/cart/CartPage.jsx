import React from 'react';
import { Container, CartProduct, CartSummary } from '../../components';
import { Header } from '../../containers/';

import { IconShevronLeft, IconShevronRight } from '../../assets/images/icons';
import * as Styled from './CartPage.styled.js';

export const CartPage = () => {
	return (
		<Styled.CartPage>
			<Header />

			<Container>
				<>
					<Styled.Title>Your Basket</Styled.Title>

					<Styled.Header>
						<Styled.HeaderButton>
							<IconShevronLeft />
							CONTINUE SHOPPING
						</Styled.HeaderButton>
						<Styled.HeaderTexts>
							<Styled.HeaderText>Shopping Bag(2)</Styled.HeaderText>
							<Styled.HeaderText>Your Favorites(1)</Styled.HeaderText>
						</Styled.HeaderTexts>
						<Styled.HeaderButton>
							CHECKOUT NOW
							<IconShevronRight />
						</Styled.HeaderButton>
					</Styled.Header>

					<Styled.Content>
						<Styled.ProductsList>
							<CartProduct />
						</Styled.ProductsList>

						<CartSummary />
					</Styled.Content>
				</>
			</Container>
		</Styled.CartPage>
	);
};
