import React from 'react';
import { Wrapper, LoaderContent, Letter } from './Loader.styled';

const LOADER_TEXT = 'Loading...';

export const Loader = () => {
	return (
		<Wrapper>
			<LoaderContent>
				{[...LOADER_TEXT].map((sign, index) => (
					<Letter data-letter={sign} key={sign + index} index={index}>
						{sign}
					</Letter>
				))}
			</LoaderContent>
		</Wrapper>
	);
};
