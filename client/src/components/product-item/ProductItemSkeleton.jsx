import React from 'react';
import ContentLoader from 'react-content-loader';

export const ProductItemSkeleton = (props) => (
	<ContentLoader
		speed={3}
		width={320}
		height={460}
		viewBox='0 0 320 460'
		backgroundColor='#eceaea'
		foregroundColor='#c4b1b1'
		{...props}
	>
		<rect x='0' y='0' rx='15' ry='15' width='320' height='460' />
	</ContentLoader>
);
