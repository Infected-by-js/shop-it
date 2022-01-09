import { darken } from 'polished';
import styled, { css } from 'styled-components';
import { color, fonts, TRANSION_MS } from '../../styles/constants';

export const Overview = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: 50%;
		height: 100%;
		background-color: ${darken(0.03, color.white)};
		z-index: -1;
	}
`;

export const MainView = styled.div`
	position: relative;
	width: 600px;
	height: 700px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	@supports (filter: drop-shadow(0px 6px 12px rgb(0 0 0 / 40%))) {
		filter: drop-shadow(0px 6px 12px rgb(0 0 0 / 40%));
	}
`;

export const MainImage = styled.img`
	margin-bottom: 20px;

	width: 100%;
	height: 100%;
	object-fit: contain;
`;
export const Buttons = styled.div`
	position: absolute;
	right: 50%;
	bottom: -8%;
	display: flex;
	align-items: center;
	justify-content: center;

	transform: translateX(50%);
`;
export const Button = styled.button`
	margin-right: 2rem;
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	background-color: transparent;
	border: 0;
	outline: 0;
	font-size: 1rem;
	line-height: 1.25rem;
	font-weight: 400;
	font-family: ${fonts.arsenal};
	color: ${color.grey};

	transition: color ${TRANSION_MS} ease;

	&:last-child {
		margin-right: 0;
	}

	svg {
		margin-right: 0.5rem;
		display: inline-block;
		width: 20px;
		height: 20px;

		g {
			transition: stroke ${TRANSION_MS} ease;
		}
	}

	&:hover,
	&:focus {
		color: ${color.red};

		g {
			stroke: ${color.red};
		}
	}
`;

export const PreviewList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;

export const PreviewItem = styled.li`
	padding: 4px;
	margin-bottom: 10px;
	height: 4.5rem;
	width: 4.5rem;
	border: 3px solid transparent;
	opacity: 0.5;
	cursor: pointer;

	transition: opacity ${TRANSION_MS} ease, border-color ${TRANSION_MS} ease;

	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}

	&:last-child {
		margin-bottom: 0;
	}

	${({ isActivePreview }) =>
		isActivePreview &&
		css`
			opacity: 1;
			border-color: ${color.grey};
		`}

	&:hover {
		opacity: 1;
	}
`;
