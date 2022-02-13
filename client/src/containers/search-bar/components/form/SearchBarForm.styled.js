import styled from 'styled-components';
import { animationSpeed, color, fonts, fontWeight } from '../../../../styles/constants';

export const Form = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Input = styled.input.attrs({
	placeholder: 'Search arts',
})`
	width: 100%;
	margin: 0 10px;
	font-size: 1.25rem;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.l};
	color: ${color.black};

	border: none;

	&::placeholder {
		font-weight: ${fontWeight.arsenal.m};
		color: ${color.grey};
	}
`;

export const Button = styled.button`
	font-size: 1rem;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.l};
	color: ${color.grey};

	padding: 8px;
	background-color: transparent;
	border: 1px solid ${color.greyLight};
	border-radius: 10px;

	transition: color ${animationSpeed.middle} ease-in-out,
		border-color ${animationSpeed.middle} ease-in-out;

	&:hover {
		color: ${color.black};

		border-color: ${color.black};
	}
`;
export const IconWrapp = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;

	& g {
		fill: ${color.grey};
		transition: fill ${animationSpeed.middle} ease-in-out;
	}
`;
