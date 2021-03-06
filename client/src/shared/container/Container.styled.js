import styled from 'styled-components';
import { device, size } from '../../assets/styles/constants';

export const Wrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 0 1rem;

	@media ${device.mobileL} {
		max-width: ${size.mobileL};
	}
	@media ${device.tablet} {
		max-width: ${size.tablet};
	}
	@media ${device.laptop} {
		max-width: ${size.laptop};
	}
	@media ${device.laptopL} {
		max-width: ${size.laptopL};
	}
`;
