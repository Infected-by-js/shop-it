import styled from 'styled-components';
import { color, fonts, fontWeight } from '../../assets/styles/constants';
import { StyledInput } from '../../ui/input/Input.styled';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;

	${StyledInput} {
		border-color: ${({ isError }) => isError && color.red};
	}
`;

export const Label = styled.p`
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	font-size: 1.25rem;
`;

export const ErrorMessage = styled.p`
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	font-size: 0.9rem;
	letter-spacing: 0.5px;
	color: ${color.red};
`;
