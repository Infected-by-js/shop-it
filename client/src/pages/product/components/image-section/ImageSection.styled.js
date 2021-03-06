import styled from 'styled-components';
import { device } from '../../../../assets/styles/constants';

export const ImageWrapp = styled.div`
	position: relative;
	grid-area: image;

	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	margin-bottom: 10px;
	height: 450px;
	overflow: hidden;

	img {
		position: absolute;

		height: 100%;
		width: 100%;
		object-fit: contain;
	}

	@media ${device.tablet} {
		margin-bottom: 30px;
		height: 580px;
	}

	@media ${device.laptop} {
		height: auto;

		margin-bottom: 0;
		padding: 0 20px 20px 0;

		img {
			position: absolute;
		}
	}
`;

export const Buttons = styled.div`
	grid-area: buttons;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	margin-bottom: 20px;

	font-size: 1.5rem;
`;
