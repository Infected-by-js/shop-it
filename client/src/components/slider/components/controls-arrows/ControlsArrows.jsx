import React from 'react';
import { IconShevronLeft, IconShevronRight } from '../../../../assets/images/icons/';
import { Wrapper, Arrow } from './ControlsArrows.styled.js';

export const ControlsArrows = ({ handleLeft, handleRight, setSlide }) => {
	return (
		<Wrapper>
			<Arrow onClick={handleLeft}>
				<IconShevronLeft />
			</Arrow>
			<Arrow onClick={handleRight}>
				<IconShevronRight />
			</Arrow>
		</Wrapper>
	);
};
