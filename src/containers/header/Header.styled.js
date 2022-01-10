import styled from 'styled-components';
import { color, headerHeight } from '../../styles/constants';

export const Wrapper = styled.header`
	background-color: ${color.white};
`;
export const Content = styled.header`
	height: ${headerHeight};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
