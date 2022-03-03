import styled from 'styled-components';
import { color, device } from '../../../../../../assets/styles/constants';

export const ThumbnailsWrapp = styled.div`
	grid-area: previews;
	padding-top: 20px;
	align-items: center;
	justify-content: center;
	row-gap: 10px;
	column-gap: 30px;
	flex-wrap: wrap;

	display: flex;
	border-top: 1px solid ${color.greyLight};

	@media ${device.tablet} {
		row-gap: 20px;
		display: flex;
		align-items: center;
	}
`;

export const ThumbnailsItem = styled.div`
	height: 50px;
	cursor: pointer;
	overflow: hidden;

	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}

	@media ${device.tablet} {
		height: 100px;
	}

	@media ${device.laptop} {
		display: flex;
	}
`;
