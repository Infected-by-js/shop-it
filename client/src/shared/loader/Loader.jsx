import { Portal } from '../';
import { useShowScrollbar } from '../../hooks/';
import { Wrapper, LoaderContent, Letter } from './Loader.styled';

const LOADER_TEXT = 'Loading...';

export const Loader = ({ isLoading }) => {
	useShowScrollbar(isLoading);

	if (!isLoading) {
		return null;
	}

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
