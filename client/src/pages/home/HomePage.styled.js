import styled from 'styled-components';
import { darken } from 'polished';
import { color, headerHeight } from '../../assets/styles/constants';

export const Main = styled.main`
	margin-top: ${headerHeight};
	padding-bottom: 150px;

	background-color: ${darken(0.03, color.white)};
`;
