import { darken } from 'polished';
import styled from 'styled-components';
import { color, device, headerHeight } from '../../styles/constants';

export const Main = styled.main`
	padding-top: 35px;
	padding-bottom: 150px;

	background-color: ${darken(0.03, color.white)};
`;

export const Products = styled.div`
	margin-top: 35px;
	display: grid;
	gap: 30px;
	grid-template-columns: 1fr;
	align-items: flex-start;
	justify-items: center;

	@media ${device.tablet} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${device.laptop} {
		grid-template-columns: repeat(4, 1fr);
	}
`;
