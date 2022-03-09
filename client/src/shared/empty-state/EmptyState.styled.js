import styled from 'styled-components';
import { fonts, fontWeight, device } from '../../assets/styles/constants';

export const Wrapper = styled.div`
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	font-size: 1.5rem;
	text-align: center;
	margin: 100px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	width: 100%;

	@media ${device.tablet} {
		font-size: 3rem;
	}
`;

export const Icon = styled.span`
	font-size: 8rem;
`;
