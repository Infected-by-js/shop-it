import ContentLoader from 'react-content-loader';

export const ProductCardSkeleton = (props) => (
	<ContentLoader
		width={300}
		height={460}
		viewBox='0 0 300 460'
		backgroundColor='#f5f5f5'
		foregroundColor='#dbdbdb'
		{...props}
	>
		<rect x='0' y='0' rx='15' ry='15' width='300' height='460' />
	</ContentLoader>
);
