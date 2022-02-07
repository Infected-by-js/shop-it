import React, { useEffect } from 'react';
import { Portal } from '../portal/Portal';
import { ModalContainer, Overlay, Content } from './Modal.styled';

export const Modal = ({ onClose, children, ...props }) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => (document.body.style.overflow = 'visible');
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
