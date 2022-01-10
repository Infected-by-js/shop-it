import React from 'react';

import { Container, CartProduct, CartSummary } from '../../components';
import { Header } from '../../containers/';

import { IconShevronLeft, IconShevronRight } from '../../assets/images/icons';
import { Wrapper, Title, ButtonsWrapp, Button, Content, ProductsList } from './CartPage.styled.js';

export const CartPage = () => {
	return (
		<Wrapper>
			<Header />

			<Container>
				<Title>Your Basket</Title>
				<ButtonsWrapp>
					<Button>
						<IconShevronLeft />
						CONTINUE SHOPPING
					</Button>
					<Button>
						CHECKOUT NOW
						<IconShevronRight />
					</Button>
				</ButtonsWrapp>

				<Content>
					<ProductsList>
						<CartProduct />
					</ProductsList>

					<CartSummary />
				</Content>
			</Container>
		</Wrapper>
	);
};
