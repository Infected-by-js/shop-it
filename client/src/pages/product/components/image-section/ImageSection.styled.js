import styled from 'styled-components';
import { device, color, animationSpeed } from '../../../../assets/styles/constants';

export const ImageWrapp = styled.div`
	grid-area: image;
	padding: 10px;

	display: flex;
	align-items: center;
	justify-content: center;

	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}

	@media ${device.tablet} {
		margin-bottom: 30px;
	}

	@media ${device.laptop} {
		margin-bottom: 0;
		padding: 0 20px 20px 0;
	}
`;

export const Previews = styled.div`
	grid-area: previews;
	align-items: center;
	justify-content: center;
	gap: 50px;
	border-top: 1px solid ${color.greyLight};

	display: none;

	@media ${device.laptop} {
		display: flex;
	}
`;

export const PreviewsItem = styled.div`
	margin-top: 20px;
	height: 80px;
	width: 80px;
	cursor: pointer;
	opacity: 0.7;

	transition: opacity ${animationSpeed.middle} ease-in;

	&:hover {
		opacity: 1;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}

	@media ${device.laptop} {
		display: flex;
	}
`;
