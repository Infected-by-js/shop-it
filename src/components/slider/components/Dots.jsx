import React from 'react';
import styled from 'styled-components';
import { color, TRANSION_MS } from '../../../styles/constants.js';

export const Dots = ({ slides, slide, setSlide }) => {
	const handleChange = (event) => {
		setSlide(Number(event.target.value));
	};
	return (
		<Container>
			{slides.map((_, index) => (
				<Label key={index}>
					<RadioButton value={index} checked={index === slide} onChange={handleChange} />
					<Dot />
				</Label>
			))}
		</Container>
	);
};

const Container = styled.div`
	position: absolute;
	bottom: 10px;
	right: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Label = styled.label`
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid transparent;
	border-radius: 50%;
	cursor: pointer;

	&:focus-within {
		border: 2px solid ${color.white};
	}

	&::before {
		content: '';
		position: absolute;
		display: block;
		width: 20px;
		height: 20px;
	}

	&:hover {
		&::before {
			z-index: 9;
		}
	}
`;

const RadioButton = styled.input.attrs({
	type: 'radio',
	name: 'slides',
	readOnly: true,
})`
	clip: rect(0, 0, 0, 0);
	clip-path: inset(50%);
	overflow: hidden;
	position: absolute;
	width: 5px;
	height: 5px;
`;

const Dot = styled.span`
	display: inline-block;
	position: relative;
	width: 10px;
	height: 10px;
	opacity: 0.3;

	color: ${color.white};
	background-color: ${color.white};

	border-radius: 50%;
	transition: opacity ${TRANSION_MS} ease;

	&::before {
		content: '';
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		border: 4px solid;
		opacity: 0.1;
		transform: translate(-50%, -50%) scale(0);

		transition: transform ${TRANSION_MS} ease;
	}

	${Label}:hover & {
		opacity: 1;
	}

	${RadioButton}:checked ~ & {
		opacity: 1;

		&::before {
			transform: translate(-50%, -50%) scale(1);
		}
	}
`;
