import React from 'react';
import ContentLoader from 'react-content-loader';

export const OverviewSkeleton = (props) => (
	<ContentLoader
		width={600}
		height={700}
		viewBox='0 0 600 700'
		backgroundColor='#f5f5f5'
		foregroundColor='#dbdbdb'
		{...props}
	>
		<rect x='0' y='0' rx='2' ry='2' width='600' height='700' />
	</ContentLoader>
);
