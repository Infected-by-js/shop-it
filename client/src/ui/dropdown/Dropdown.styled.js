import styled from 'styled-components';
import { animationSpeed, color, fonts, fontWeight } from '../../styles/constants';

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
		border: solid black;
		border-width: 0 1.5px 1.5px 0;
		display: inline-block;
		padding: 3px;
		transform: rotate(45deg);
	}

	${Container}:hover & {
		color: ${color.red};
	}
`;

export const Menu = styled.ul`
	position: absolute;
	top: 110%;
	left: 0;
	width: 100%;
	display: none;
	background-color: ${color.white};
	border: 1px solid ${color.grey};
	box-shadow: 2px 4px 6px ${color.grey};

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

	padding: 20px;
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
