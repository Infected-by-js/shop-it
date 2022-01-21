import React from 'react';

import { Wrapper, Title, Item, ItemText, ItemPrice, Button } from './CartSummary.styled';

export const CartSummary = ({ totalPrice }) => {
	const shippingPrice = 5.9;
	const discount = 5.9;

	return (
		<Wrapper>
			<Title>ORDER SUMMARY</Title>
			<Item>
				<ItemText>Subtotal</ItemText>
				<ItemPrice>$ {totalPrice}</ItemPrice>
			</Item>
			<Item>
				<ItemText>Estimated Shipping</ItemText>
				<ItemPrice>$ {shippingPrice}</ItemPrice>
			</Item>
			<Item>
				<ItemText>Shipping Discount</ItemText>
				<ItemPrice>$ -{discount}</ItemPrice>
			</Item>
			<Item type='total'>
				<ItemText>Total</ItemText>
				<ItemPrice>$ {totalPrice}</ItemPrice>
			</Item>
			<Button>CHECKOUT NOW</Button>
		</Wrapper>
	);
};
