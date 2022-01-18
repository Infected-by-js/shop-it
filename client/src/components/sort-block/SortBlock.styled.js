import styled from 'styled-components';
import { color, device, fonts, fontWeight, TRANSION_MS } from '../../styles/constants';

export const Wrapper = styled.div`
	padding: 15px 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 8px;

	@media ${device.tablet} {
		flex-wrap: nowrap;
	}
`;

export const SortButton = styled.button`
	padding: 5px 17px;
	font-family: ${fonts.arsenal};
	font-size: 1.5rem;
	font-weight: ${fontWeight.arsenal.m};
	border: 1px solid ${color.black};
	border-radius: 4px;

	color: ${({ active }) => (active ? color.white : color.black)};
	background-color: ${({ active }) => (active ? color.black : color.white)};
	box-shadow: 0.5px 1px 2px ${color.greyLight};

	transition: color ${TRANSION_MS} ease, background-color ${TRANSION_MS} ease;

	&:hover,
	&:focus {
		color: ${color.white};
		background-color: ${color.black};
	}

	&:first-child {
		width: 100%;
	}

	@media ${device.tablet} {
		&:first-child {
			width: auto;
		}
	}
`;
