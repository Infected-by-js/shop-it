import styled from 'styled-components';
import {
	device,
	color,
	fonts,
	fontWeight,
	animationSpeed,
} from '../../../../assets/styles/constants';

export const Nav = styled.div`
	grid-area: nav;

	padding: 15px 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	border-bottom: none;
	border-left: none;

	@media ${device.laptop} {
		padding: 20px;

		border-left: 1px solid ${color.greyLight};
		border-bottom: 1px solid ${color.greyLight};
	}
`;

export const BackButton = styled.button`
	background: none;
	padding: 8px 0px;
	cursor: pointer;
	font-size: 1.25rem;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	color: ${color.black};

	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		width: 30px;
		height: 30px;
		transition: transform ${animationSpeed.middle} ease;
	}

	transition: color ${animationSpeed.middle} ease;

	&:hover {
		color: ${color.red};

		svg {
			transform: translateX(-5px);
		}
	}
`;

export const Icons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;

	@media ${device.tablet} {
		gap: 20px;
	}
`;

export const IconCart = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 52px;
	width: 52px;
	font-size: 2.2rem;

	padding: 5px;
	border-radius: 50%;
	background-color: ${({ isInCart }) => (isInCart ? color.red : 'transparent')};

	svg {
		color: ${({ isInCart }) => (isInCart ? color.white : color.black)};
		transition: color ${animationSpeed.middle} ease-in-out;
	}

	cursor: pointer;

	transition: background-color ${animationSpeed.middle} ease-in-out;

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

export const IconFavourite = styled(IconCart)`
	background-color: ${({ isFavourite }) => (isFavourite ? color.red : 'transparent')};

	& svg {
		color: ${({ isFavourite }) => (isFavourite ? color.white : color.black)};
	}
`;
