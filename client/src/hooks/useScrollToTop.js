import { useEffect } from 'react';

export const useScrollToTop = (position, deps) => {
	useEffect(() => {
		window.scrollTo({
			top: position,
			behavior: 'smooth',
		});
	}, [position, deps]);
};
