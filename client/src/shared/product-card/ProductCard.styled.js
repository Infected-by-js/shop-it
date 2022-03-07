import { lighten } from 'polished';
import styled from 'styled-components';
import { color, animationSpeed } from '../../assets/styles/constants';

export const Wrapper = styled.div`
	position: relative;
	width: 300px;
	height: 460px;
	border-radius: 15px;

	background-color: ${color.white};
	box-shadow: 1px 2px 6px ${lighten(0.5, color.grey)};

	overflow: hidden;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-position: center center;
	object-fit: cover;
`;

export const ButtonsWrapper = styled.div`
	position: absolute;
	opacity: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;

	border-radius: 15px;

	background-color: rgba(0, 0, 0, 0.5);
	transition: all ${animationSpeed.middle} ease;

	${Wrapper}:hover & {
		opacity: 1;
	}
`;
