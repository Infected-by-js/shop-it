import { darken } from 'polished';
import styled, { css } from 'styled-components';
import { color, fonts, TRANSION_MS, device } from '../../styles/constants';

export const Wrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	height: 100%;
	width: 100%;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: 50%;
		height: 100%;
		background-color: transparent;
		z-index: -1;
	}

	@media ${device.laptop} {
		&:before {
			background-color: ${darken(0.03, color.white)};
		}
	}
`;

export const Content = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	@supports (filter: drop-shadow(0px 6px 12px rgb(0 0 0 / 40%))) {
		filter: drop-shadow(0px 6px 12px rgb(0 0 0 / 40%));
	}

	@media ${device.laptopL} {
		width: 600px;
		height: 700px;
	}
`;

export const Image = styled.img`
	display: none;
	margin-bottom: 20px;

	width: 100%;
	height: 100%;
	object-fit: contain;

	@media ${device.laptopL} {
		display: block;
	}
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
	flex-direction: column;
	gap: 10px;

	@media ${device.laptop} {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}

	@media ${device.laptopL} {
		position: relative;
		flex-direction: row;
	}
`;

export const PreviewItem = styled.li`
	padding: 4px;
	margin-bottom: 10px;
	height: 400px;
	width: 300px;
	border: 3px solid transparent;
	opacity: 1;

	transition: opacity ${TRANSION_MS} ease, border-color ${TRANSION_MS} ease;

	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}

	@media ${device.tablet} {
		height: 700px;
		width: 600px;
	}

	@media ${device.laptop} {
		height: 600px;
		width: 500px;
	}

	@media ${device.laptopL} {
		opacity: 0.5;
		max-height: 4.5rem;
		max-width: 4.5rem;
		cursor: pointer;
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
