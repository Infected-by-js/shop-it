import { useEffect, useRef } from 'react';

export const useSkipFirstMount = (callback, deps) => {
	const mount = useRef(true);

	useEffect(() => {
		if (!mount.current) {
			const cleanup = callback();

			return () => {
				cleanup();
				mount.current = true;
			};
		}

		mount.current = false;
		// eslint-disable-next-line
	}, [deps]);
};
