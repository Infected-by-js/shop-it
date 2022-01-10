import React from 'react';

import { Wrapper, Title, Item, ItemText, ItemPrice, Button } from './CartSummary.styled';

export const CartSummary = () => {
	return (
		<Wrapper>
			<Title>ORDER SUMMARY</Title>
			<Item>
				<ItemText>Subtotal</ItemText>
				<ItemPrice>$ 80</ItemPrice>
			</Item>
			<Item>
				<ItemText>Estimated Shipping</ItemText>
				<ItemPrice>$ 5.90</ItemPrice>
			</Item>
			<Item>
				<ItemText>Shipping Discount</ItemText>
				<ItemPrice>$ -5.90</ItemPrice>
			</Item>
			<Item type='total'>
				<ItemText>Total</ItemText>
				<ItemPrice>$ 80</ItemPrice>
			</Item>
			<Button>CHECKOUT NOW</Button>
		</Wrapper>
	);
};
