import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../ui/Button';
import { Container, CartProduct, CartSummary } from '../../components';
import { Header } from '../../containers/';

import { IconShevronLeft, IconShevronRight } from '../../assets/images/icons';
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
	ModalSuccess,
} from './CartPage.styled.js';
import { Modal } from '../../components/modal/Modal';

export const CartPage = () => {
	const { products, totalPrice } = useSelector((state) => state.cart);
	const [openModal, setOpenModal] = useState(false);

	const dispatch = useDispatch();

	const handleRemoveFromCart = (product) => {
		dispatch(removeProduct(product));
	};

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
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
						<CartSummary totalPrice={totalPrice} onOpenModal={handleOpenModal} />
					</SummaryContainer>
				</Content>
			</Container>

			{openModal && (
				<Modal onClose={handleCloseModal}>
					<ModalSuccess>SUCCCESS</ModalSuccess>
				</Modal>
			)}
		</Wrapper>
	);
};
