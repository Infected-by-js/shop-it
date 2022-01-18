import styled from 'styled-components';
import { color, device, fonts, fontWeight, TRANSION_MS } from '../../styles/constants';

export const Wrapper = styled.div`
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover,
	&:focus-within {
		& input {
			border-color: ${color.red};
			box-shadow: 0.2px 0.5px 2px ${color.red};
		}

		& g {
			fill: ${color.red};
		}
	}
`;

export const Input = styled.input.attrs({
	type: 'text',
	placeholder: 'Search...',
	id: 'search-input',
})`
	padding: 0.5rem 1rem 0.5rem 2.5rem;
	display: none;
	width: 250px;
	font-family: ${fonts.arsenal};
	font-size: 1.25rem;
	font-weight: ${fontWeight.arsenal.m};
	font-style: normal;
	border: 1.5px solid ${color.greyLight};
	border-radius: 8px;

	transition: border-color ${TRANSION_MS} ease-in-out, box-shadow ${TRANSION_MS} ease-in-out;

	&::placeholder {
		font-weight: ${fontWeight.inter.xs};
	}

	@media ${device.laptop} {
		display: flex;
	}
`;

export const Label = styled.label.attrs({
	htmlFor: 'search-input',
})`
	position: absolute;
	left: 4px;
	top: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2rem;
	height: 2rem;
	border: none;
	background-color: transparent;
	cursor: pointer;
	transform: translateY(-50%);

	& g {
		fill: ${color.greyLight};
		transition: fill ${TRANSION_MS} ease-in-out;
	}
`;
