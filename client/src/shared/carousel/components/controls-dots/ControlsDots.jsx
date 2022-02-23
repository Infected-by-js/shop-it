import React from 'react';
import { Wrapper, Label, RadioButton, Dot } from './ControlsDots.styled.js';

export const ControlsDots = ({ slides, slide, setSlide, position = 'none' }) => {
	const handleChange = ({ target }) => {
		setSlide(Number(target.value));
	};

	return (
		<Wrapper position={position}>
			{slides.map((_, index) => (
				<Label key={index}>
					<RadioButton value={index} checked={index === slide} onChange={handleChange} />
					<Dot />
				</Label>
			))}
		</Wrapper>
	);
};
