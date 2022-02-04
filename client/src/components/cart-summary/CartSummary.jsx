import React from 'react';

import { Wrapper, Title, Item, ItemText, ItemPrice, Button } from './CartSummary.styled';

const mockDiscount = 5.9;

export const CartSummary = ({ totalPrice, onCheckOut }) => {
	const total = totalPrice.toFixed(2);
	const discount = totalPrice ? mockDiscount : 0;

	return (
		<Wrapper>
			<Title>ORDER SUMMARY</Title>
			<Item>
				<ItemText>Subtotal</ItemText>
				<ItemPrice>$ {total}</ItemPrice>
			</Item>
			<Item>
				<ItemText>Estimated Shipping</ItemText>
				<ItemPrice>$ {discount}</ItemPrice>
			</Item>
			<Item>
				<ItemText>Shipping Discount</ItemText>
				<ItemPrice>$ {discount * -1}</ItemPrice>
			</Item>
			<Item type='total'>
				<ItemText>Total</ItemText>
				<ItemPrice>$ {total}</ItemPrice>
			</Item>
			<Button onClick={onCheckOut}>CHECKOUT NOW</Button>
		</Wrapper>
	);
};
