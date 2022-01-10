import styled from 'styled-components';
import { lighten } from 'polished';
import { color, device, fonts, fontWeight } from '../../styles/constants';

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url('./images/banner_3.jpeg') center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.div`
	min-width: 280px;
	width: 70%;
	padding: 20px;
	background-color: white;
	border-radius: 10px;

	@media ${device.laptop} {
		width: 700px;
	}
`;

export const Title = styled.h1`
	text-align: center;
	font-family: ${fonts.inter};
	font-size: 1.5rem;
	font-weight: ${fontWeight.inter.m};

	@media ${device.tablet} {
		text-align: left;

		font-size: 2rem;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;

	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};

	button {
		width: 100%;
		margin-bottom: 10px;
	}

	@media ${device.tablet} {
		flex-direction: row;
	}
`;

export const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 0 10px 20px 0px;
	padding: 10px;
	border: 1px solid ${color.black};
	border-radius: 4px;

	&:hover {
		box-shadow: 0 0 3px ${lighten(0.3, color.black)};
	}

	&:focus {
		box-shadow: 0 0 3px ${color.blue};
	}
`;

export const Link = styled.a`
	display: inline-block;
	width: 50%;
	margin: 5px 0px;
	font-size: 12px;
	text-transform: uppercase;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;
