import { defaultEasing } from '../../../../../helpers/motions-utils';

export const mainImageVariants = {
	incoming: (direction) => ({
		x: direction > 0 ? '100%' : '-100%',
		scale: 1.2,
		opacity: 0,
		transition: { duration: 0.5 },
	}),
	active: { x: 0, scale: 1, opacity: 1, transition: { duration: 0.5 } },
	exit: (direction) => ({
		x: direction > 0 ? '-100%' : '100%',
		scale: 1,
		opacity: 0,
		transition: { duration: 0.5 },
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
