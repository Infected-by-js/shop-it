import React from 'react';

import { Button } from '../../ui/Button';
import { Container, CartProduct, CartSummary } from '../../components';
import { Header } from '../../containers/';

import { IconShevronLeft, IconShevronRight } from '../../assets/images/icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../redux/features/cart/cartSlice';
import {
	Wrapper,
	Title,
	ButtonsWrapp,
	Content,
	ProductsList,
	ProductsContainer,
	SummaryContainer,
	Placeholder,
} from './CartPage.styled.js';

export const CartPage = () => {
	const { products, quantity, totalPrice } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const handleRemoveFromCart = (product) => {
		dispatch(removeProduct(product));
	};

	return (
		<Wrapper>
			<Header />

			<Container>
				<Title>Your Basket</Title>
				<ButtonsWrapp>
					<Button outlined>
						<IconShevronLeft />
						CONTINUE SHOPPING
					</Button>
					<Button outlined>
						CHECKOUT NOW
						<IconShevronRight />
					</Button>
				</ButtonsWrapp>

				<Content>
					<ProductsContainer>
						{!products.length ? (
							<Placeholder>Cart is empty</Placeholder>
						) : (
							<ProductsList>
								{products.map((product) => (
									<CartProduct
										key={product._id}
										product={product}
										removeProduct={handleRemoveFromCart}
									/>
								))}
							</ProductsList>
						)}
					</ProductsContainer>

					<SummaryContainer>
						<CartSummary totalPrice={totalPrice} />
					</SummaryContainer>
				</Content>
			</Container>
		</Wrapper>
	);
};
