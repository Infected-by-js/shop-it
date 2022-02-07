import styled from 'styled-components';
import { color, device, fonts, fontWeight, TRANSION_MS } from '../../styles/constants';

export const Content = styled.div`
	width: 300px;
	padding: 30px;

	@media ${device.tablet} {
		width: 600px;
	}

	@media ${device.desktop} {
		width: 800px;
	}
`;
export const SearchForm = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 2px solid ${color.silver};
`;

export const ButtonClose = styled.button`
	font-size: 1rem;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.l};
	color: ${color.grey};

	padding: 8px;
	background-color: transparent;
	border: 1px solid ${color.greyLight};
	border-radius: 10px;

	transition: color ${TRANSION_MS} ease-in-out, border-color ${TRANSION_MS} ease-in-out;

	&:hover {
		color: ${color.black};

		border-color: ${color.black};
	}
`;

export const Input = styled.input.attrs({
	placeholder: 'Search arts',
})`
	width: 100%;
	margin: 0 10px;
	font-size: 1.25rem;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.l};
	color: ${color.black};

	border: none;

	&::placeholder {
		font-weight: ${fontWeight.arsenal.m};
		color: ${color.grey};
	}
`;

export const ResultsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 450px;
`;

export const IconWrapp = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;

	& g {
		fill: ${color.grey};
		transition: fill ${TRANSION_MS} ease-in-out;
	}
`;
