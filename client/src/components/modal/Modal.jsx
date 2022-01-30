import React from 'react';
import { Portal } from '../portal/Portal';
import { ModalContainer, Overlay, Content } from './Modal.styled';

export const Modal = ({ onClose, children, ...props }) => {
	return (
		<Portal>
			<ModalContainer>
				<Overlay onClick={onClose} />
				<Content {...props}>{children}</Content>
			</ModalContainer>
		</Portal>
	);
};
