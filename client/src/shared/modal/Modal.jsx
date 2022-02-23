import React, { useEffect } from 'react';
import { Portal } from '../portal/Portal';
import { ModalContainer, Overlay, Content } from './Modal.styled';

export const Modal = ({ onClose, children, ...props }) => {
	useEffect(() => {
		const handleEscButton = (event) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};

		document.body.style.overflow = 'hidden';
		document.addEventListener('keydown', handleEscButton);

		return () => {
			document.removeEventListener('keydown', handleEscButton);
			document.body.style.overflow = 'visible';
		};
	}, []);

	return (
		<Portal>
			<ModalContainer>
				<Overlay onClick={onClose} />
				<Content {...props}>{children}</Content>
			</ModalContainer>
		</Portal>
	);
};
