import styled from 'styled-components';
import { color, device, fonts, fontWeight, headerHeight } from '../../assets/styles/constants';

export const Wrapper = styled.main``;

export const Title = styled.h1`
	margin-top: ${headerHeight};
	padding: 20px 0;
	margin-bottom: 20px;
	font-size: 2rem;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	text-align: center;
	border-bottom: 1px solid ${color.silverLight};
`;
export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 50px;
	margin-bottom: 50px;

	flex-direction: column;

	@media ${device.laptop} {
		flex-direction: row;
	}
	@media ${device.laptopL} {
		max-width: 80%;
		margin: 0 auto 50px;
	}
`;

export const FavouriteList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	flex: 1;
	gap: 50px;
`;
