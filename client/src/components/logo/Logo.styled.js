import styled from 'styled-components';
import { color, TRANSION_MS } from '../../styles/constants';

export const Wrapper = styled.div`
	margin: 0 auto;

	&:hover,
	&:focus-within {
		g {
			fill: ${color.red};
		}
	}
	g {
		transition: fill ${TRANSION_MS} ease;
	}
`;
