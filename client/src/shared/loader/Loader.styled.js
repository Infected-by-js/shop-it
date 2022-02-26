import styled, { css } from 'styled-components';
import { color, fonts, fontWeight, device } from '../../assets/styles/constants';

export const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(5px);
`;
export const LoaderContent = styled.div`
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.l};
	font-size: 2.5rem;

	@media ${device.tablet} {
		font-size: 4rem;
	}
`;
export const Letter = styled.span`
	position: relative;
	color: rgba(0, 0, 0, 0.15);
	font-weight: inherit;
	text-transform: uppercase;

	&:before {
		content: attr(data-letter);
		position: absolute;
		top: 0;
		left: 0;
		color: ${color.black};
		text-transform: inherit;
		animation: load-animation 10s infinite backwards;
	}

	${({ index }) =>
		index &&
		css`
			&:nth-child(${index + 1}):before {
				animation-delay: ${index * 0.4}s;
			}
		`}

	@keyframes load-animation {
		0%,
		80%,
		to {
			transform: scale(1.8);
			opacity: 0;
		}
		5% {
			opacity: 0.5;
		}
		20%,
		50% {
			transform: scale(1) rotate(0);
			opacity: 1;
		}
	}
`;
