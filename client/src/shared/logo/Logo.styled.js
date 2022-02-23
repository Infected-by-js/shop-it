import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { animationSpeed } from '../../assets/styles/constants';

export const Link = styled(RouterLink)`
	width: 230px;
	height: 100%;
	margin: 0 auto;

	transition: transform ${animationSpeed.fast} ease-out;

	&:hover,
	&:focus-visible {
		transform: scale(1.05);
	}
`;

export const LogoStyled = styled.img.attrs({
	alt: 'logo',
})`
	width: 100%;
	height: 100%;
`;
