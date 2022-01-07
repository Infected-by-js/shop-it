import React from 'react';
import { IconShevronLeft, IconShevronRight } from '../../../assets/images/icons';
import { color, device, TRANSION_MS } from '../../../styles/constants';
import styled from 'styled-components';

export const Controls = ({ handleLeft, handleRight, slides, slide, setSlide }) => {
	const handleChange = (event) => {
		setSlide(Number(event.target.value));
	};

	return (
		<>
			<ArrowsContainer>
				<Arrow onClick={handleLeft}>
					<IconShevronLeft />
				</Arrow>
				<Arrow onClick={handleRight}>
					<IconShevronRight />
				</Arrow>
			</ArrowsContainer>

			<DotsContainer>
				{slides.map((_, index) => (
					<Label key={index}>
						<RadioButton value={index} checked={index === slide} onChange={handleChange} />
						<Dot />
					</Label>
				))}
			</DotsContainer>
		</>
	);
};

const ArrowsContainer = styled.div`
	padding: 2rem;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	display: none;
	align-items: center;
	justify-content: space-between;

	width: 50%;
	height: 100%;

	opacity: 0;
	transition: opacity ${TRANSION_MS} ease-in-out;

	&:hover {
		opacity: 1;
	}

	&:focus-within {
		opacity: 1;
	}

	@media ${device.tablet} {
		display: flex;
	}
`;

const Arrow = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 70px;
	height: 70px;
	background-color: ${color.white};
	border: 0;

	border-radius: 50%;
	opacity: 0.6;

	transition: opacity ${TRANSION_MS} ease;
	z-index: 10;

	&:hover,
	&:focus {
		opacity: 1;
	}
`;

const DotsContainer = styled.div`
	position: absolute;
	bottom: 10px;
	right: 0;
	display: none;
	align-items: center;
	justify-content: center;
	width: 50%;

	@media ${device.tablet} {
		display: flex;
	}
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
		border: 2px solid ${color.red};
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

	color: ${color.red};
	background-color: ${color.red};

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
