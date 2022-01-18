import styled from 'styled-components';
import { headerHeight } from '../../styles/constants';

export const Main = styled.main`
	margin-top: ${headerHeight};
	position: relative;
	display: grid;
	grid-template-columns: repeat(2, 50%);
	grid-template-rows: 100%;
`;

export const Column = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: calc(100vh - ${headerHeight});
`;
