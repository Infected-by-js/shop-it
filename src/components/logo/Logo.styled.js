import styled from 'styled-components';
import { TRANSION_MS } from '../../styles/constants';

export const Wrapper = styled.div`
	transition: transform ${TRANSION_MS} ease;

	&:hover,
	&:focus-within {
		transform: scale(1.05);
	}
`;
