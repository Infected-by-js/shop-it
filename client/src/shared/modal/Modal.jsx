import { useEffect } from 'react';
import { Portal } from '../portal/Portal';
import { AnimatePresence, motion } from 'framer-motion';
import { modalVariants, modalOverlayVariants } from '../../helpers/motions-utils';
import { ModalContainer, Overlay, Content } from './Modal.styled';
import { useSkipFirstMount } from '../../hooks';

export const Modal = ({ isOpen, onClose, children, ...props }) => {
	useEffect(() => {
		const handleEscButton = (event) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleEscButton);
		return () => {
			document.removeEventListener('keydown', handleEscButton);
		};
	}, []);

	useSkipFirstMount(() => {
		document.body.style.overflow = 'hidden';

		return () => (document.body.style.overflow = 'visible');
	}, isOpen);

	if (!isOpen) {
		return null;
	}

	return (
		<Portal>
			<ModalContainer>
				<Overlay
					as={motion.div}
					key='overlay'
					onClick={onClose}
					variants={modalOverlayVariants}
					{...modalOverlayVariants}
				/>
				<Content
					as={motion.div}
					variants={modalVariants}
					{...modalVariants}
					{...props}
					key='modal'
					layoutId='modal'
					layout
				>
					{children}
				</Content>
			</ModalContainer>
		</Portal>
	);
};
