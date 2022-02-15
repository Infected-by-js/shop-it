import { useEffect } from 'react';
import { useRef } from 'react';

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
	}, [deps]);
};
