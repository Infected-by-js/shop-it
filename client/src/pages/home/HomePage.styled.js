import styled from 'styled-components';
import { darken } from 'polished';
import { color } from '../../styles/constants';

export const Main = styled.main`
	padding-top: 35px;
	padding-bottom: 150px;

	background-color: ${darken(0.03, color.white)};
`;
