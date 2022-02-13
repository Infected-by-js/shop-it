import React from 'react';
import { Modal } from '../../../../components';

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
