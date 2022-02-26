import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { StyledInput } from '../../shared/input/Input.styled';
import { color, device, fonts, fontWeight, animationSpeed } from '../../assets/styles/constants';

export const Wrapper = styled.div`
	width: 100vw;
	min-height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	background: ${color.white};
`;

export const Content = styled.div`
	min-width: 280px;
	max-width: 70%;
	padding: 20px;
	background-color: ${color.white};

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto 1fr auto;
	gap: 20px 40px;
	grid-template-areas:
		'title title'
		'other other'
		'form form'
		'link link';

	@media ${device.tablet} {
		min-width: 700px;
		grid-template-areas:
			'title title'
			'form other'
			'form other'
			'link other';
	}
`;
export const TitleContainer = styled.div`
	grid-area: title;

	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
	font-family: ${fonts.inter};
	font-size: 1.5rem;
	font-weight: ${fontWeight.inter.xs};
	text-align: center;
	flex: 1;

	margin: 0;
	padding-bottom: 20px;

	@media ${device.tablet} {
		text-align: left;
		font-size: 2rem;
	}
`;

export const Error = styled.p`
	font-family: ${fonts.inter};
	font-size: 1.15rem;
	font-weight: ${fontWeight.inter.xs};
	color: ${color.red};
`;

export const Form = styled.form`
	grid-area: form;
	display: flex;
	flex-direction: column;
	gap: 15px;

	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.m};

	input {
		gap: 20px;

		margin: 10px 0 5px;
		font-size: 0.8rem;
		letter-spacing: 0.5px;

		&::placeholder {
			text-transform: capitalize;
		}

		@media ${device.tablet} {
			margin: 15px 0 5px;

			font-size: 1.3rem;
		}
	}

	button {
		margin-top: 10px;
		width: 100%;
	}
`;

export const OthersBlock = styled.div`
	grid-area: other;
	display: flex;
	align-items: stretch;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
	padding-bottom: 20px;

	border-bottom: 1px solid rgba(0, 0, 0, 0.1);

	@media ${device.tablet} {
		padding-bottom: 0;

		border: none;
	}
`;

export const OtherLoginButton = styled.button`
	padding: 10px;
	border-radius: 8px;
	border: 2px solid ${color.greyLight};

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	background-color: transparent;
	font-size: 1rem;

	transition: background-color ${animationSpeed.fast} ease;

	svg {
		width: 20px;
		height: 20px;
	}

	&:hover {
		background-color: ${color.silver};
	}

	@media ${device.tablet} {
		font-size: 1.2rem;

		svg {
			width: 40px;
			height: 40px;
		}
	}
`;

export const Link = styled(RouterLink)`
	grid-area: link;
	justify-self: center;

	&:hover {
		color: ${color.blue};
		text-decoration: underline;
	}
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;

	${StyledInput} {
		border-color: ${({ isError }) => isError && color.red};
	}
`;

export const Label = styled.p`
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	font-size: 1.25rem;
`;

export const ErrorMessage = styled.p`
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	font-size: 0.9rem;
	letter-spacing: 0.5px;
	color: ${color.red};
`;
