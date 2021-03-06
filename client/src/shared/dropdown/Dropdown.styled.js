import styled from 'styled-components';
import { animationSpeed, color, fonts, fontWeight } from '../../assets/styles/constants';

export const Container = styled.div`
	position: relative;
	padding: 10px 20px;
	user-select: none;
`;

export const Label = styled.span`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	font-size: 1.5rem;

	&::after {
		content: '';
		position: absolute;
		right: -8px;
		border: solid ${color.black};
		border-width: 0 2px 2px 0;
		display: inline-block;
		padding: 3px;
		transform: rotate(45deg);
		transition: transform ${animationSpeed.middle} ease-in-out;
	}

	${Container}:hover & {
		color: ${color.red};

		&::after {
			border-color: ${color.red};
			transform: rotate(225deg);
		}
	}
`;

export const Menu = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	display: none;
	background-color: ${color.white};
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);

	animation: growDown 300ms ease-in-out forwards;
	transform-origin: top center;

	${Container}:hover & {
		display: block;
	}

	&::before {
		content: '';
		position: absolute;
		top: -100%;
		left: 0;
		height: 100%;
		width: 100%;
	}

	@keyframes growDown {
		0% {
			transform: scaleY(0);
		}
		80% {
			transform: scaleY(1.1);
		}
		100% {
			transform: scaleY(1);
		}
	}
`;
export const Item = styled.li`
	display: none;
	justify-content: center;
	align-items: center;
	word-wrap: normal;

	padding: 10px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	font-size: 1.5rem;
	cursor: pointer;

	transition: background-color ${animationSpeed.fast} ease;

	&:hover {
		background-color: ${color.silver};
	}

	${Container}:hover & {
		display: flex;
	}
`;
