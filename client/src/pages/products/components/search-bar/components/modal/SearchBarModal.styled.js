import styled from 'styled-components';
import { device, color } from '../../../../../../assets/styles/constants';

export const Wrapper = styled.div`
	width: 300px;
	padding: 30px;

	@media ${device.tablet} {
		width: 600px;
	}

	@media ${device.desktop} {
		width: 800px;
	}
`;

export const Content = styled.div`
	margin-top: 20px;
	padding-top: 20px;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 450px;

	border-top: 1px solid ${color.silver};
`;
