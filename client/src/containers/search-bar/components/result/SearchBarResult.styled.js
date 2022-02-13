import styled from 'styled-components';
import { animationSpeed, color, device, fonts, fontWeight } from '../../../../styles/constants';

export const Wrapp = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 30px;
	flex: 1;
	width: 100%;
	margin: 10px 0;
	padding: 0 20px;

	overflow-y: auto;
	overflow-x: hidden;
`;

export const EmptyState = styled.span`
	font-size: 1.5rem;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.m};
	color: ${color.grey};
`;

export const ResultItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	gap: 20px;
	border: 1px solid transparent;
	border-radius: 10px;
	transition: border-color ${animationSpeed.fast} ease-in-out;
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

export const ItemContent = styled.div`
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
