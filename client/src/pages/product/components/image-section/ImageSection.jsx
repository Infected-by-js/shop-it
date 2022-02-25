import React from 'react';
import { ImageWrapp, Previews, PreviewsItem } from './ImageSection.styled';

export const ImageSection = ({ images }) => {
	if (!images) {
		return null;
	}
	return (
		<>
			<ImageWrapp>
				<img src={images[0]} alt='product' />
			</ImageWrapp>
			<Previews>
				{images.map((image) => (
					<PreviewsItem key={image}>
						<img src={image} alt='preview' />
					</PreviewsItem>
				))}
			</Previews>
		</>
	);
};
