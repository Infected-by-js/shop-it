import React from 'react';
import { IconWrapp, Bange } from './IconWithBange.styled';

export const IconWithBange = ({ bangeLabel, icon: Icon, isShownBange = true }) => {
	return (
		<IconWrapp>
			<Icon />
			{isShownBange && <Bange>{bangeLabel}</Bange>}
		</IconWrapp>
	);
};
