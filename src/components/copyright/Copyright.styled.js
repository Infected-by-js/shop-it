import styled from 'styled-components';
import { color, TRANSION_MS } from '../../styles/constants';

export const Wrapper = styled.a.attrs({
	href: 'https://github.com/Infected-by-js',
})`
	color: ${color.white};

	transition: color ${TRANSION_MS} ease;

	&:hover {
		color: ${color.blue};
	}
`;
