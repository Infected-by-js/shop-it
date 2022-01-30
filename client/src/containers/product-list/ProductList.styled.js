import styled from 'styled-components';
import { device, fonts, fontWeight } from '../../styles/constants';

export const Wrapper = styled.div`
	margin-top: 35px;
	display: grid;
	gap: 30px;
	grid-template-columns: 1fr;
	align-items: flex-start;
	justify-items: center;

	@media ${device.tablet} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${device.laptop} {
		grid-template-columns: repeat(3, 1fr);
	}

	@media ${device.laptopL} {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const EmptyStateTitle = styled.h2`
	margin-top: 35px;

	text-align: center;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.m};
	font-size: 2rem;
`;
