import styled from 'styled-components';
import { device } from '../../../../assets/styles/constants';

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 50px;
	margin-bottom: 50px;

	flex-direction: column;

	@media ${device.laptop} {
		flex-direction: ${({ isReversed }) => (isReversed ? 'row-reverse' : 'row')};
	}
	@media ${device.laptopL} {
		max-width: 80%;
		margin: 0 auto 50px;
	}
`;

export const Content = styled.div`
	width: 100%;
`;

export const CartList = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 40px;
`;
