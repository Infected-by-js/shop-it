import React, { useState } from 'react';
import { IconSearch } from '../../assets/images/icons/IconSearch';

import { Button, IconWrapp, Text } from './SearchMenu.styled';
import { SearchModal } from '../../components';

export const SearchMenu = () => {
	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<>
			<Button onClick={handleOpenModal}>
				<IconWrapp>
					<IconSearch />
				</IconWrapp>
				<Text>Search...</Text>
			</Button>
			{openModal && <SearchModal onClose={handleCloseModal} />}
		</>
	);
};
