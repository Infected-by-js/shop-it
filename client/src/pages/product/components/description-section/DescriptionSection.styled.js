import styled from 'styled-components';
import { device, color, fonts, fontWeight } from '../../../../assets/styles/constants';

export const Wrapper = styled.div`
	grid-area: content;

	padding: 10px;
	border-left: none;

	@media ${device.laptop} {
		padding: 30px;
		border-left: 1px solid ${color.greyLight};
	}
`;

export const Header = styled.h2`
	margin-bottom: 10px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.l};
	font-size: 1.75rem;
	line-height: 1;

	color: ${color.dark};

	@media ${device.laptop} {
		font-size: 2.15rem;
		margin-bottom: 20px;
	}
`;

export const Text = styled.p`
	margin-bottom: 1rem;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	font-size: 1.15rem;
	line-height: 1;
	color: ${color.grey};

	@media ${device.laptop} {
		font-size: 1.5rem;
		margin-bottom: 15px;
		font-weight: ${fontWeight.inter.xs};
	}
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
