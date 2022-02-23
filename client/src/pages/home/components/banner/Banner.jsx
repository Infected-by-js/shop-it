import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Wrapper, InfoContainer, Title, Description, Image } from './Banner.styled';
import { Button } from '../../../../shared';

export const Banner = ({ imageSrc, title, description, buttonLabel, isActiveSlide, href }) => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/${href}`);
	};

	return (
		<Wrapper>
			<InfoContainer>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<Button tabIndex={isActiveSlide ? 0 : -1} onClick={handleNavigate}>
					{buttonLabel}
				</Button>
			</InfoContainer>

			<Image src={imageSrc} />
		</Wrapper>
	);
};
