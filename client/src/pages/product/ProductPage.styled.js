import styled from 'styled-components';
import { headerHeight, device, color } from '../../assets/styles/constants';

export const Main = styled.div`
	margin-top: ${headerHeight};
	min-height: calc(100vh - ${headerHeight});

	width: 100%;
	height: 100%;
	background: ${color.white};

	display: grid;

	grid-template-columns: 1fr;
	grid-template-rows: 0.2fr 1fr 0.1fr 1fr;
	grid-auto-columns: 100%;
	grid-template-areas:
		'nav'
		'image'
		'buttons'
		'content';

	@media ${device.tablet} {
		grid-template-rows: repeat(4, auto);
		grid-template-areas:
			'nav'
			'image'
			'previews'
			'content';
	}

	@media ${device.laptop} {
		margin-top: calc(${headerHeight} + 10px);
		min-height: 100%;
		height: calc(100vh - ${headerHeight} - 10px);

		grid-template-columns: repeat(2, 50%);
		grid-template-rows: 0.2fr 2fr 1fr;
		grid-auto-columns: 1fr;
		grid-template-areas:
			'image nav'
			'image content'
			'previews content';
	}
`;
