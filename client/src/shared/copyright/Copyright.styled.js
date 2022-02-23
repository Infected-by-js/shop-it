import styled from 'styled-components';
import { color, animationSpeed } from '../../assets/styles/constants';

export const CopyrightLink = styled.a.attrs({
	href: 'https://github.com/Infected-by-js',
	target: '_blank',
})`
	color: ${color.white};

	transition: color ${animationSpeed.middle} ease;

	&:hover,
	&:focus {
		color: ${color.red};
	}
`;
