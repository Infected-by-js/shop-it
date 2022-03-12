import { useEffect } from 'react';
import { motion } from 'framer-motion';

import { modalVariants, modalOverlayVariants } from '../../helpers/motions-utils';
import { useShowScrollbar } from '../../hooks/';
import { Portal } from '../portal/Portal';
import { ModalContainer, Overlay, Content } from './Modal.styled';

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
		// eslint-disable-next-line
	}, []);

	useShowScrollbar(isOpen);

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
