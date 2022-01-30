import styled from 'styled-components';
import { device } from '../../styles/constants';

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

	background-color: rgba(0, 0, 0, 0.03);

	@media ${device.tablet} {
		flex-direction: row;
	}
`;
