import React from 'react';

import { IconSearch } from '../../../../../../assets/images/icons';

import { Button, IconWrapp, Text } from './TriggerButton.styled';

export const TriggerButton = ({ onTrigger }) => {
	return (
		<Button onClick={onTrigger}>
			<IconWrapp>
				<IconSearch />
			</IconWrapp>
			<Text>Search...</Text>
		</Button>
	);
};
