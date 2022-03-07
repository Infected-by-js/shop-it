import { Portal } from '../';
import { Wrapper, LoaderContent, Letter } from './Loader.styled';

const LOADER_TEXT = 'Loading...';

export const Loader = () => {
	return (
		<Portal>
			<Wrapper>
				<LoaderContent>
					{[...LOADER_TEXT].map((sign, index) => (
						<Letter data-letter={sign} key={sign + index} index={index}>
							{sign}
						</Letter>
					))}
				</LoaderContent>
			</Wrapper>
		</Portal>
	);
};
