import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Button, IconWrapp, Text } from './TriggerButton.styled';

export const TriggerButton = ({ onTrigger }) => {
	return (
		<Button onClick={onTrigger}>
			<IconWrapp>
				<FiSearch />
			</IconWrapp>
			<Text>Search...</Text>
		</Button>
	);
};
