import React from 'react';
import { IconShevronLeft, IconShevronRight } from '../../assets/images/icons';
import { Container } from '../../components';
import { CartProduct } from '../../components/cart-product/CartProduct';
import { Header } from '../../containers/';
import * as Styled from './CartPage.styled.js';

export const CartPage = () => {
	return (
		<>
			<Header />

			<Container>
				<Styled.Title>Your Cart</Styled.Title>

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

					<Styled.Summary>
						<Styled.SummaryTitle>ORDER SUMMARY</Styled.SummaryTitle>
						<Styled.SummaryItem>
							<Styled.SummaryItemText>Subtotal</Styled.SummaryItemText>
							<Styled.SummaryItemPrice>$ 80</Styled.SummaryItemPrice>
						</Styled.SummaryItem>
						<Styled.SummaryItem>
							<Styled.SummaryItemText>Estimated Shipping</Styled.SummaryItemText>
							<Styled.SummaryItemPrice>$ 5.90</Styled.SummaryItemPrice>
						</Styled.SummaryItem>
						<Styled.SummaryItem>
							<Styled.SummaryItemText>Shipping Discount</Styled.SummaryItemText>
							<Styled.SummaryItemPrice>$ -5.90</Styled.SummaryItemPrice>
						</Styled.SummaryItem>
						<Styled.SummaryItem type='total'>
							<Styled.SummaryItemText>Total</Styled.SummaryItemText>
							<Styled.SummaryItemPrice>$ 80</Styled.SummaryItemPrice>
						</Styled.SummaryItem>
						<Styled.Button>CHECKOUT NOW</Styled.Button>
					</Styled.Summary>
				</Styled.Content>
			</Container>
		</>
	);
};
