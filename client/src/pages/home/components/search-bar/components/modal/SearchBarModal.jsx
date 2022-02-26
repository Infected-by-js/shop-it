import React from 'react';
import { Modal } from '../../../../../../shared';

import { Wrapper, Content } from './SearchBarModal.styled';

export const SearchBarModal = ({ children, onCloseModal }) => {
	return (
		<Modal onClose={onCloseModal}>
			<Wrapper>{children}</Wrapper>
		</Modal>
	);
};

SearchBarModal.Content = ({ children }) => {
	return <Content>{children}</Content>;
};
