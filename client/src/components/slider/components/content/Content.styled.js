import styled from 'styled-components';
import { darken } from 'polished';
import { color, device, fonts, fontWeight, headerHeight } from '../../../../styles/constants';

export const Wrapper = styled.li`
	position: relative;
	min-width: 100vw;
	max-width: 100vw;
	width: 100%;
	height: calc(100vh - ${headerHeight});
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	z-index: 10;
	-webkit-transform: translate3d(0, 0, 0);

	background-color: ${darken(0.03, color.white)};

	@media ${device.tablet} {
		flex-direction: row;
	}
`;

export const InfoContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	flex: 1;
	z-index: 10;

	button {
		font-size: 1.75rem;
		border-radius: 8px;
	}
`;

export const Title = styled.h1`
	margin: 0 0 20px 0;
	padding: 0 1.5rem;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.m};
	font-size: 3rem;
	text-align: center;
	color: ${color.black};
`;
export const Description = styled.p`
	margin-bottom: 20px;
	padding: 0 1.5rem;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.m};
	font-size: 1.5rem;
	text-align: center;

	color: ${color.black};
`;

export const Image = styled.img`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	flex: 1;
	min-width: 320px;
	width: 50%;
	height: 100%;
	object-fit: cover;
	box-shadow: -2px 4px 10px ${color.greyLight};
	filter: blur(2px);

	@media ${device.tablet} {
		position: relative;
		left: 0;
		transform: translateX(0);
		filter: unset;
	}
`;
