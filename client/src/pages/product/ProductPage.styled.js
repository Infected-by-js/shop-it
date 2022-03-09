import styled from 'styled-components';
import { headerHeight, device, color } from '../../assets/styles/constants';

export const Main = styled.div`
	margin-top: ${headerHeight};
	min-height: calc(100vh - ${headerHeight});

	width: 100%;
	height: 100%;
	background: ${color.white};

	display: grid;
	align-items: center;

	grid-template-columns: 1fr;
	grid-template-rows: 0.1fr 1fr 0.1fr 0.2fr 0.5fr;
	grid-auto-columns: 100%;
	grid-template-areas:
		'nav'
		'image'
		'buttons'
		'previews'
		'content';

	@media ${device.tablet} {
		grid-template-rows: 0.1fr 1fr 0.1fr 0.1fr;
		grid-template-areas:
			'nav'
			'image'
			'buttons'
			'previews'
			'content';
	}

	@media ${device.laptop} {
		margin-top: calc(${headerHeight} + 10px);
		min-height: 100%;
		height: calc(100vh - ${headerHeight} - 10px);
		align-items: stretch;

		grid-template-columns: repeat(2, 50%);
		grid-template-rows: 0.1fr 1fr 0.1fr 0.5fr;
		grid-auto-columns: 1fr;
		grid-template-areas:
			'image nav'
			'image content'
			'buttons content'
			'previews content';
	}
`;
