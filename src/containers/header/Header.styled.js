import styled from 'styled-components';
import { color, headerHeight } from '../../styles/constants';

export const Header = styled.header`
	background-color: ${color.white};
`;
export const HeaderContent = styled.header`
	height: ${headerHeight};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
