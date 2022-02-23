import styled from 'styled-components';
import { darken } from 'polished';
import { color, device } from '../../../../assets/styles/constants';

export const Main = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 40px;
	padding: 4rem 2rem;
	margin-top: 80px;
	margin-bottom: 80px;

	background-color: ${darken(0.04, color.white)};

	@media ${device.tablet} {
		flex-direction: row;
	}
`;
