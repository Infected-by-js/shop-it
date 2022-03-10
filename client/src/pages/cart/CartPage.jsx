import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';

import { routeToProductPage } from '../../router/routes';
import { removeFromCart } from '../../redux/actions';
import { cartSelector } from '../../redux/selectors';

import { useRouting } from '../../hooks/useRouting';
import { defaultPageFadeInVariants } from '../../helpers/motions-utils';

import { CartItem, CartSummary } from './components/';
import { Container, EmptyState, Modal } from '../../shared';
import { Wrapper, Title, Cart, Content, CartList } from './CartPage.styled.js';

export const CartPage = () => {
	const { products, totalPrice } = useSelector(cartSelector);
	const [openModal, setOpenModal] = useState(false);
	const dispatch = useDispatch();
	const { navigateTo } = useRouting();

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const handleRemoveFromCart = (item) => {
		dispatch(removeFromCart(item));
	};

	const handleRouteToProduct = (id) => {
		navigateTo(routeToProductPage(id));
	};

	return (
		<Wrapper as={motion.div} variants={defaultPageFadeInVariants} {...defaultPageFadeInVariants}>
			<Container>
				<Title>Your Cart</Title>

				{!products.length ? (
					<EmptyState label='Your Cart is Empty' />
				) : (
					<Cart>
						<Content>
							<CartList>
								<AnimatePresence>
									{products.map((product, index) => (
										<CartItem
											key={product.id}
											product={product}
											image={product.images[0]}
											onRemove={handleRemoveFromCart}
											onRouteToProduct={handleRouteToProduct}
											index={index}
											{...product}
										/>
									))}
								</AnimatePresence>
							</CartList>
						</Content>
						{totalPrice > 0 && <CartSummary totalPrice={totalPrice} onCheckOut={handleOpenModal} />}
					</Cart>
				)}
			</Container>

			<Modal isOpen={openModal} onClose={handleCloseModal}>
				There will be payment soon...
			</Modal>
		</Wrapper>
	);
};
