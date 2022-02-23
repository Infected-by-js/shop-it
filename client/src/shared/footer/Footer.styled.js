import styled from 'styled-components';
import { color, device } from '../../assets/styles/constants';

export const Wrapper = styled.footer`
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 30px;

	font-size: 0.75rem;

	background-color: ${color.black};

	@media ${device.tablet} {
		font-size: 1rem;
	}
`;
