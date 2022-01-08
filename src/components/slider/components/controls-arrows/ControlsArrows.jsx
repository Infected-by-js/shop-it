import React from 'react';
import { IconShevronLeft, IconShevronRight } from '../../../../assets/images/icons/';
import * as Styled from './ControlsArrows.styled.js';

export const ControlsArrows = ({ handleLeft, handleRight, setSlide }) => {
	return (
		<Styled.ControlsArrows>
			<Styled.Arrow onClick={handleLeft}>
				<IconShevronLeft />
			</Styled.Arrow>
			<Styled.Arrow onClick={handleRight}>
				<IconShevronRight />
			</Styled.Arrow>
		</Styled.ControlsArrows>
	);
};
