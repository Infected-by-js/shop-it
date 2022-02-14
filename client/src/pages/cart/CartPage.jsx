import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PRODUCTS_PAGE_ROUTE } from '../../router/routes';
import { removeFromCart } from '../../redux/actions';
import { cartSelector } from '../../redux/selectors';

import { Header, Cart } from '../../containers/';
import { Container, Modal } from '../../components';
import { Button } from '../../ui/';

import { IconShevronLeft, IconShevronRight } from '../../assets/images/icons';
import { Wrapper, Title, ButtonsWrapp } from './CartPage.styled.js';

export const CartPage = () => {
	const { products, totalPrice } = useSelector(cartSelector);
	const [openModal, setOpenModal] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleRemoveFromCart = (product) => {
		dispatch(removeFromCart(product));
	};

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const handleBack = () => {
		navigate(PRODUCTS_PAGE_ROUTE);
	};

	return (
		<Wrapper>
			<Header />

			<Container>
				<Title>Your Cart</Title>
				<ButtonsWrapp>
					<Button outlined onClick={handleBack}>
						<IconShevronLeft />
						CONTINUE SHOPPING
					</Button>
					<Button outlined onClick={handleOpenModal}>
						CHECKOUT NOW
						<IconShevronRight />
					</Button>
				</ButtonsWrapp>

				<Cart products={products} totalPrice={totalPrice} onCheckOut={handleOpenModal} />
			</Container>

			{openModal && <Modal onClose={handleCloseModal}>SUCCCESS</Modal>}
		</Wrapper>
	);
};
