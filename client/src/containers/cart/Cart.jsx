import React from 'react';
import { CartItem, CartSummary, CartEmptyState } from './components/';

import { Content, Wrapper, CartList } from './Cart.styled';

export const Cart = ({ products, isReversed = false, totalPrice, onCheckOut }) => {
	if (!products.length) {
		return <CartEmptyState label='Cart is empty' />;
	}

	return (
		<Wrapper isReversed={isReversed}>
			<Content>
				<CartList>
					{products.map((product) => (
						<CartItem
							key={product.id}
							productLink={product.id}
							image={product.images[0]}
							onRemove={() => {}}
							{...product}
						/>
					))}
				</CartList>
			</Content>
			{totalPrice > 0 && <CartSummary totalPrice={totalPrice} onCheckOut={onCheckOut} />}
		</Wrapper>
	);
};
