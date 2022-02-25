import { lighten } from 'polished';
import styled from 'styled-components';
import { color, device, fonts, fontWeight } from '../../../../assets/styles/constants';

export const Wrapper = styled.div`
	position: relative;

	display: grid;
	align-items: center;
	grid-template-columns: 1fr;
	grid-template-areas: 'image ' 'content';
	gap: 40px;

	user-select: none;
	border: 2px solid transparent;

	@media ${device.laptop} {
		grid-template-columns: minmax(30%, 1fr) minmax(600px, 1fr);
		grid-template-areas: 'content image';
	}
`;

export const InfoContainer = styled.div`
	min-width: 320px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	backdrop-filter: grayscale(1);

	button {
		font-size: 2rem;
		border-radius: 4px;
		border: 3px solid;
		border-color: ${color.red};
		color: ${color.red};
		background-color: transparent;

		background-color: ${color.red};
		color: ${color.white};
		box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);

		&:hover {
			background-color: ${lighten(0.1)(color.red)};
			border-color: ${lighten(0.1)(color.red)};
		}

		@media ${device.laptop} {
			color: ${color.white};
		}
	}

	@media ${device.laptop} {
		position: static;
		background-color: transparent;
		backdrop-filter: unset;
	}
`;

export const Title = styled.h1`
	margin-bottom: 30px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.l};
	font-size: 2.5rem;
	text-align: center;
	color: ${color.red};

	@media ${device.tablet} {
		font-size: 2.75rem;
	}

	@media ${device.laptop} {
		color: ${color.white};

		font-size: 3.5rem;
	}
`;
export const Description = styled.p`
	margin-bottom: 30px;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	font-size: 2rem;
	text-align: center;

	color: ${color.red};

	@media ${device.tablet} {
		font-size: 1.55rem;
	}

	@media ${device.laptop} {
		font-size: 2rem;
		color: ${color.white};
	}
`;

export const ImageContainer = styled.div`
	grid-area: image;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Image = styled.img`
	min-width: 300px;
	object-fit: cover;
	width: 100%;
	height: 100%;

	@media ${device.tablet} {
		width: 80%;
		box-shadow: 2px 4px 10px ${color.black};
	}
`;
