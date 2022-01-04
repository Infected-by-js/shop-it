import styled from 'styled-components';
import { color, device, fontWeight, TRANSION_MS } from '../../styles/constants';

export const Search = styled.div`
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover,
	&:focus-within {
		& input {
			border-color: ${color.red};
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
	display: none;
	width: 215px;
	padding: 0.5rem 1rem 0.5rem 2.5rem;
	font-size: 1rem;
	font-weight: ${fontWeight.inter.s};
	font-style: normal;
	border: 1px solid ${color.greyLight};
	border-radius: 4px;

	transition: border-color ${TRANSION_MS} ease-in-out, width ${TRANSION_MS} linear;

	&::placeholder {
		font-weight: ${fontWeight.inter.xs};
		font-style: italic;
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
