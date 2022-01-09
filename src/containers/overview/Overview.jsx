import React from 'react';
import * as Styled from './Overview.styled.js';

const images = ['./images/img_1.jpeg', './images/img_2.jpeg'];

export const Overview = () => {
	return (
		<Styled.Overview>
			<Styled.MainView>
				<Styled.MainImage src='./images/img_1.jpeg' />

				<Styled.PreviewList>
					{images &&
						images.map((imageSrc) => (
							<Styled.PreviewItem key={imageSrc}>
								<img src={imageSrc} alt='preview' />
							</Styled.PreviewItem>
						))}
				</Styled.PreviewList>
			</Styled.MainView>
		</Styled.Overview>
	);
};
