import styled from 'styled-components';
import { headerHeight, device } from '../../assets/styles/constants';

export const Main = styled.main`
	margin-top: ${headerHeight};
	position: relative;
	display: flex;
	flex-direction: column-reverse;

	@media ${device.laptop} {
		display: grid;
		grid-template-columns: repeat(2, 50%);
		grid-template-rows: 100%;
	}
`;

export const Column = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: auto;
	margin: 3rem;
	overflow-x: hidden;
	overflow-y: unset;

	@media ${device.laptop} {
		margin: 0;
		height: calc(100vh - ${headerHeight});
	}

	&:last-child {
		@media ${device.laptop} {
			overflow-y: auto;
		}

		@media ${device.laptopL} {
			overflow-y: hidden;
		}
	}
`;
