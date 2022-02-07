import styled from 'styled-components';
import { color, TRANSION_MS, device, fonts, fontWeight } from '../../styles/constants';

export const Wrapp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	gap: 20px;
	border: 1px solid transparent;
	border-radius: 10px;
	transition: border-color ${TRANSION_MS} ease-in-out;
	cursor: pointer;

	&:hover {
		border: 1px solid ${color.greyLight};
	}
`;
export const Image = styled.img`
	width: 140px;
	height: 140px;

	border-radius: 10px;
`;

export const Content = styled.div`
	display: none;
	height: 100%;
	flex: 1;
	align-items: center;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 10px;
	grid-template-areas:
		'title title'
		'author price';

	@media ${device.tablet} {
		display: grid;
	}
`;
export const Title = styled.div`
	grid-area: title;
	font-family: ${fonts.arsenal};
	font-size: 1.25rem;
	font-weight: ${fontWeight.arsenal.l};
	color: ${color.black};
`;

export const Author = styled.div`
	grid-area: author;
	font-size: 1rem;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.m};
	color: ${color.grey};
`;
export const Price = styled.div`
	grid-area: price;
	justify-self: flex-end;
	font-size: 1.25rem;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.l};

	color: ${color.grey};
`;
