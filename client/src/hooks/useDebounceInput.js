import { useRef } from 'react';

export const useDebounceInput = (cooldown) => {
	const timerRef = useRef({ timer: null });

	const debounce = () => clearTimeout(timerRef.current.timer);

	const input = (cb) => {
		debounce();

		timerRef.current.timer = setTimeout(() => {
			cb();
		}, cooldown);
	};

	return { debounce, input };
};
