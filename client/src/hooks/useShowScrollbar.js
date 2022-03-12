import { useSkipFirstMount } from './useSkipFirstMount';

export const useShowScrollbar = (isShow) => {
	useSkipFirstMount(() => {
		document.body.style.overflow = 'hidden';

		return () => (document.body.style.overflow = 'visible');
	}, isShow);
};
