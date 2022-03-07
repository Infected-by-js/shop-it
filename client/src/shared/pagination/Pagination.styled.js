import { lighten } from 'polished';
import styled, { css } from 'styled-components';
import { fonts, color, animationSpeed, device } from '../../assets/styles/constants';

export const Wrapper = styled.nav`
	margin-top: 50px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media ${device.tablet} {
		justify-content: flex-end;
	}
`;
export const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 10px;
`;

export const Item = styled.button`
	width: 36px;
	height: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${fonts.arsenal};
	font-size: 1.5rem;
	border: 1px solid ${color.black};
	background-color: transparent;
	color: ${color.black};

	transition: background-color ${animationSpeed.middle} ease, color ${animationSpeed.middle} ease;

	&:hover,
	&:focus-visible {
		background-color: ${lighten(0.4)(color.black)};
		color: ${color.white};
	}

	${({ active }) =>
		active &&
		css`
			background-color: ${color.black};
			color: ${color.white};
			user-select: none;
			pointer-events: none;
		`}

	${({ disabled }) =>
		disabled &&
		css`
			pointer-events: none;
		`}

		@media ${device.tablet} {
		width: 50px;
		height: 50px;
	}
`;
