import styled from 'styled-components';
import { device } from '../../../../../../assets/styles/constants';

export const PreviewsItem = styled.div`
	margin-top: 20px;
	height: 100px;
	cursor: pointer;
	overflow: hidden;

	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}

	@media ${device.laptop} {
		display: flex;
	}
`;
