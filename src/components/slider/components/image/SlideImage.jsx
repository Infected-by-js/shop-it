import React from 'react';
import * as S from './SlideImage.styled.js';

export const SlideImage = ({ imgSrcL, imgSrcM, imgSrcS, imgSrc = '' }) => {
	return (
		<S.ImageWrapp>
			<source media='(min-width: 1280px)' srcSet={imgSrcL || imgSrc} />
			<source media='(min-width: 768px)' srcSet={imgSrcM || imgSrc} />
			<source media='(min-width: 576px)' srcSet={imgSrcS || imgSrc} />
			<S.Image src={imgSrc} alt='slide' />
		</S.ImageWrapp>
	);
};
