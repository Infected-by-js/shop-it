import React from 'react';
import ContentLoader from 'react-content-loader';

export const InfoSkeleton = (props) => (
	<ContentLoader
		width={450}
		height={460}
		viewBox='0 0 450 460'
		backgroundColor='#f5f5f5'
		foregroundColor='#dbdbdb'
		{...props}
	>
		<circle cx='425' cy='20' r='19' />
		<rect x='0' y='10' rx='0' ry='0' width='166' height='25' />
		<rect x='0' y='54' rx='0' ry='0' width='450' height='16' />
		<rect x='0' y='85' rx='0' ry='0' width='273' height='20' />
		<rect x='0' y='119' rx='0' ry='0' width='450' height='17' />
		<rect x='0' y='154' rx='0' ry='0' width='450' height='71' />
		<rect x='0' y='252' rx='0' ry='0' width='450' height='2' />
		<rect x='322' y='269' rx='0' ry='0' width='123' height='45' />
		<rect x='0' y='334' rx='0' ry='0' width='312' height='15' />
		<rect x='0' y='363' rx='0' ry='0' width='314' height='15' />
		<rect x='0' y='392' rx='0' ry='0' width='450' height='35' />
		<rect x='50' y='442' rx='0' ry='0' width='378' height='10' />
	</ContentLoader>
);
