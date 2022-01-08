import React from 'react';
import * as Styled from './ControlsDots.styled.js';

export const ControlsDots = ({ slides, slide, setSlide }) => {
	const handleChange = (event) => {
		setSlide(Number(event.target.value));
	};
	return (
		<Styled.ControlsDots>
			{slides.map((_, index) => (
				<Styled.Label key={index}>
					<Styled.RadioButton value={index} checked={index === slide} onChange={handleChange} />
					<Styled.Dot />
				</Styled.Label>
			))}
		</Styled.ControlsDots>
	);
};
