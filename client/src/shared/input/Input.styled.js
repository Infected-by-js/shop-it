import styled from 'styled-components';
import { color, fonts, fontWeight, animationSpeed } from '../../assets/styles/constants';

export const StyledInput = styled.input`
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	font-size: 1.2rem;
	flex: 1;
	padding: 10px;
	border: 2px solid ${color.greyLight};
	border-radius: 4px;

	transition: border-color ${animationSpeed.middle} ease;

	&:hover {
		border-color: ${color.grey};
	}

	&:focus-visible {
		border-color: ${color.dark};
	}

	&::placeholder {
		font-weight: ${fontWeight.inter.xs};
	}
`;
