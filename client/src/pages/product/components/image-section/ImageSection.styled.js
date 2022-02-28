import styled from 'styled-components';
import { device, color } from '../../../../assets/styles/constants';

export const ImageWrapp = styled.div`
	position: relative;
	grid-area: image;
	padding: 10px;
	overflow: hidden;

	display: flex;
	align-items: center;
	justify-content: center;

	img {
		position: absolute;

		height: 100%;
		width: 100%;
		object-fit: contain;
	}

	@media ${device.tablet} {
		margin-bottom: 30px;
		height: 550px;
	}

	@media ${device.laptop} {
		height: 700px;

		margin-bottom: 0;
		padding: 0 20px 20px 0;

		img {
			position: absolute;
		}
	}
`;

export const Previews = styled.div`
	grid-area: previews;
	align-items: center;
	justify-content: center;
	gap: 50px;

	display: none;

	@media ${device.tablet} {
		border-top: 1px solid ${color.greyLight};

		display: flex;
		align-items: flex-start;
	}
`;

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
