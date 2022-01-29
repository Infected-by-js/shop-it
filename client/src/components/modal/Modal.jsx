import React from 'react';
import { Portal } from '../portal/Portal';
import { IconClose } from '../../assets/images/icons';
import { ModalContainer, Overlay, Content, ButtonClose } from './Modal.styled';

export const Modal = ({ onClose, children, ...props }) => {
	return (
		<Portal>
			<ModalContainer>
				<Overlay onClick={onClose} />
				<Content {...props}>
					<ButtonClose onClick={onClose}>
						<IconClose />
					</ButtonClose>
					{children}
				</Content>
			</ModalContainer>
		</Portal>
	);
};
