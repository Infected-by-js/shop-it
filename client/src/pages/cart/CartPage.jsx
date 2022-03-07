import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { HOME_PAGE_ROUTE } from '../../router/routes';
import { removeFromCart } from '../../redux/actions';
import { cartSelector } from '../../redux/selectors';

import { Header, Container, Modal, Button } from '../../shared';
import { Cart } from './components/cart/Cart';
import { defaultPageFadeInVariants } from '../../helpers/motions-utils';
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
		navigate(HOME_PAGE_ROUTE);
	};

	return (
		<Wrapper as={motion.div} variants={defaultPageFadeInVariants} {...defaultPageFadeInVariants}>
			<Header />

			<Container>
				<Title>Your Cart</Title>
				<ButtonsWrapp>
					<Button outlined onClick={handleBack}>
						<FiChevronLeft />
						CONTINUE SHOPPING
					</Button>
					<Button outlined onClick={handleOpenModal}>
						CHECKOUT NOW
						<FiChevronRight />
					</Button>
				</ButtonsWrapp>

				<Cart products={products} totalPrice={totalPrice} onCheckOut={handleOpenModal} />
			</Container>

			{openModal && <Modal onClose={handleCloseModal}>SUCCCESS</Modal>}
		</Wrapper>
	);
};
