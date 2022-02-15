import React from 'react';
import { Wrapper, Label, RadioButton, Dot } from './ControlsDots.styled.js';

export const ControlsDots = ({ slides, slide, setSlide }) => {
	const handleChange = (event) => {
		setSlide(Number(event.target.value));
	};
	return (
		<Wrapper>
			{slides.map((_, index) => (
				<Label key={index}>
					<RadioButton value={index} checked={index === slide} onChange={handleChange} />
					<Dot />
				</Label>
			))}
		</Wrapper>
	);
};
