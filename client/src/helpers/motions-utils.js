export const defaultEasing = [0.4, 0.2, 0.6, 1];

export const productCardAnimation = {
	initial: (index) => ({ opacity: 0, y: 150, transition: { duration: 0.5, delay: 0.1 * index } }),
	animate: (index) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * index } }),
	exit: (index) => ({ opacity: 0, y: -150, transition: { duration: 0.5, delay: 0.1 * index } }),
};

export const mainImageVariants = {
	initial: (direction) => ({
		x: direction > 0 ? '110%' : '-110%',
		scale: 1.2,
		transition: { duration: 0.25 },
	}),
	animate: { x: 0, scale: 1, transition: { duration: 0.25 } },
	exit: (direction) => ({
		x: direction > 0 ? '-110%' : '110%',
		scale: 0.8,
		transition: { duration: 0.25 },
	}),
};

export const thumbnailsVariantes = {
	active: {
		width: '100px',
		opacity: 1,
		transition: {
			ease: defaultEasing,
			duration: 0.4,
		},
	},
	inactive: {
		width: '60px',
		opacity: 0.4,
		transition: {
			ease: defaultEasing,
			duration: 0.4,
		},
	},
};

export const headerFadeInUpVariants = {
	initial: {
		y: -100,
		opacity: 0,
		transition: { duration: 0.8, ease: defaultEasing },
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.8, ease: defaultEasing },
	},
	exit: {
		y: -100,
		opacity: 0,
		transition: { duration: 0.8, ease: defaultEasing },
	},
};

export const footerFadeInUpVariants = {
	initial: {
		y: 100,
		opacity: 0,
		transition: { duration: 0.4, ease: defaultEasing },
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.4, ease: defaultEasing },
	},
	exit: {
		y: 100,
		opacity: 0,
		transition: { duration: 0.4, ease: defaultEasing },
	},
};

export const bounceVariants = {
	initial: { scale: 0, transition: { duration: 0.2, ease: defaultEasing } },
	animate: { scale: 1, transition: { duration: 0.2, ease: defaultEasing } },
	exit: { scale: 0, transition: { duration: 0.2, ease: defaultEasing } },
};

export const modalVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: { opacity: 0 },
	transition: { duration: 0.2, ease: defaultEasing, when: 'beforeChildren' },
};

export const modalOverlayVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	transition: { duration: 0.2, when: 'beforeChildren' },
};

export const authPageFadeInVariants = {
	initial: { opacity: 0, x: '-100%', transition: { duration: 0.2, ease: defaultEasing } },
	animate: { opacity: 1, x: 0, transition: { duration: 0.2, ease: defaultEasing } },
	exit: { opacity: 0, x: '100%', transition: { duration: 0.2, ease: defaultEasing } },
};

export const defaultPageFadeInVariants = {
	initial: {
		opacity: 0,
		transition: { duration: 0.4, ease: defaultEasing },
		willChange: 'opacity, transform',
	},
	animate: {
		opacity: 1,
		transition: { duration: 0.4, ease: defaultEasing },
		willChange: 'opacity, transform',
	},
	exit: {
		opacity: 0,
		transition: { duration: 0.4, ease: defaultEasing },
		willChange: 'opacity, transform',
	},
};

export const favouriteCardAnimation = {
	style: {
		boxShadow: '4px 8px 4px rgba(0, 0, 0, 0.1), 0px 0px 30px rgba(0, 0, 0, 0.05)',
	},
	whileHover: {
		x: -5,
		y: -5,
		boxShadow: '4px 8px 4px rgba(0, 0, 0, 0.1), 5px 5px 10px rgba(0, 0, 0, 0.3)',
		transition: 0.2,
	},
	initial: (index) => ({ opacity: 0, y: 150, transition: { delay: 0.15 * index } }),
	animate: (index) => ({ opacity: 1, y: 0, transition: { delay: 0.15 * index } }),
	exit: { opacity: 0, scale: 0 },

	transition: {
		duration: 0.2,
		layout: { duration: 0.2 },
	},
	layout: 'position',
};

export const favouritePageAnimation = {
	initial: {
		opacity: 0,
		y: '20%',
		transition: { duration: 0.2, ease: defaultEasing },
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: defaultEasing },
	},
	exit: {
		opacity: 0,
		y: '20%',
		transition: { duration: 0.4, ease: defaultEasing },
	},
};

export const cartCardAnimation = {
	whileHover: {
		boxShadow: '4px 8px 4px rgba(0, 0, 0, 0.1), 5px 5px 10px rgba(0, 0, 0, 0.3)',
	},
	initial: (index) => ({ opacity: 0, y: 150, transition: { delay: 0.15 * index } }),
	animate: (index) => ({ opacity: 1, y: 0, transition: { delay: 0.15 * index } }),
	exit: { opacity: 0 },

	transition: {
		duration: 0.2,
		layout: { duration: 0.2 },
	},
	layout: 'position',
};
