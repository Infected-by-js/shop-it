import { useState, useEffect, useMemo } from 'react';

// !!FIXME: you should create context to control viewport size by js not @media css

export const useViewport = (breakpoint = 1920) => {
	const [width, setWidth] = useState(window.innerWidth);

	const isBreakpoint = useMemo(() => width <= breakpoint, [width]);

	useEffect(() => {
		const handleWindowResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleWindowResize);

		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return { width, isBreakpoint };
};
