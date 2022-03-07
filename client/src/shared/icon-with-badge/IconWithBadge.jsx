import React from 'react';
import { IconWrapp, Badge } from './IconWithBadge.styled';

export const IconWithBadge = ({ bangeLabel, icon: Icon, isShownBange = true }) => {
	return (
		<IconWrapp>
			<Icon />
			{isShownBange && <Badge>{bangeLabel}</Badge>}
		</IconWrapp>
	);
};
