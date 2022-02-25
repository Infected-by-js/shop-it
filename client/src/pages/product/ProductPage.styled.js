import styled from 'styled-components';
import {
	headerHeight,
	device,
	color,
	fonts,
	fontWeight,
	animationSpeed,
} from '../../assets/styles/constants';

export const Main = styled.main`
	margin-top: ${headerHeight};

	width: 100%;
	height: 100%;
	background: ${color.white};

	display: grid;

	grid-template-columns: 1fr;
	grid-template-rows: repeat(auto);
	grid-auto-columns: 1fr;
	grid-template-areas:
		'nav'
		'image'
		'content';

	@media ${device.laptop} {
		margin-top: calc(${headerHeight} + 10px);
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 0.2fr 2.2fr 0.6fr;
		grid-auto-columns: 1fr;
		grid-template-areas:
			'image nav'
			'image content'
			'previews content';
	}
`;
