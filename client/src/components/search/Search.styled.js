import styled from 'styled-components';
import { color, device, fonts, fontWeight, TRANSION_MS } from '../../styles/constants';

export const Wrapper = styled.div`
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	@media ${device.laptop} {
		&:hover,
		&:focus-within {
			& label {
				border-color: ${color.red};
				box-shadow: 0.2px 0.5px 2px ${color.red};
			}

			& g {
				fill: ${color.red};
			}
		}
	}
`;
export const Label = styled.label`
	padding: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	transition: border-color ${TRANSION_MS} ease-in-out, box-shadow ${TRANSION_MS} ease-in-out;

	border: none;
	border-radius: 8px;

	cursor: pointer;
	& g {
		fill: ${color.black};
		transition: fill ${TRANSION_MS} ease-in-out;
		opacity: 1;
	}

	@media ${device.laptop} {
		border: 1.5px solid ${color.greyLight};

		g {
			opacity: 0.6;
		}
	}
`;

export const Input = styled.input.attrs({
	type: 'text',
	placeholder: 'Search...',
})`
	display: none;
	width: 250px;
	height: 100%;
	font-family: ${fonts.arsenal};
	font-size: 1.25rem;
	font-weight: ${fontWeight.arsenal.m};
	font-style: normal;
	border: none;
	border-radius: 8px;

	&::placeholder {
		font-weight: ${fontWeight.inter.xs};
	}

	@media ${device.laptop} {
		display: flex;
	}
`;
