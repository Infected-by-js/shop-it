import styled, { css } from 'styled-components';
import { color, device, TRANSION_MS } from '../../../../styles/constants';

export const Wrapper = styled.div`
	position: absolute;
	bottom: 10px;
	display: none;
	align-items: center;
	justify-content: center;

	${({ position }) => {
		switch (position) {
			case 'left':
				return css`
					left: 0;
					width: 50%;
				`;
			case 'right':
				return css`
					right: 0;
					width: 50%;
				`;
			default:
				return css`
					left: 0;
					width: 100%;
				`;
		}
	}}

	@media ${device.tablet} {
		display: flex;
	}
`;

export const Label = styled.label`
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

export const RadioButton = styled.input.attrs({
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

export const Dot = styled.span`
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
