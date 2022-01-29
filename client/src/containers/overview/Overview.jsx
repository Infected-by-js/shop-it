import React from 'react';
import { Wrapper, Content, Image, PreviewList, PreviewItem } from './Overview.styled.js';

export const Overview = ({ images }) => {
	return (
		<Wrapper>
			{images && (
				<Content>
					<Image src={images[0]} />

					<PreviewList>
						{images.map((imageSrc) => (
							<PreviewItem key={imageSrc}>
								<img src={imageSrc} alt='preview' />
							</PreviewItem>
						))}
					</PreviewList>
				</Content>
			)}
		</Wrapper>
	);
};
