import React from 'react';
import { Wrapper, Content, Image, PreviewList, PreviewItem } from './Overview.styled.js';

const images = ['./images/img_1.jpeg', './images/img_2.jpeg'];

export const Overview = () => {
	return (
		<Wrapper>
			<Content>
				<Image src='./images/img_1.jpeg' />

				<PreviewList>
					{images &&
						images.map((imageSrc) => (
							<PreviewItem key={imageSrc}>
								<img src={imageSrc} alt='preview' />
							</PreviewItem>
						))}
				</PreviewList>
			</Content>
		</Wrapper>
	);
};
