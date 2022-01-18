export const headerHeight = '88px';

export const fonts = {
	inter: 'Inter, sans-serif',
	arsenal: 'Arsenal, sans-serif',
};

export const fontWeight = {
	inter: {
		xs: 200,
		s: 400,
		m: 600,
		l: 700,
	},
	arsenal: {
		m: 400,
		l: 700,
	},
};

export const color = {
	dark: '#161412',
	black: '#23263B',
	grey: '#65635F',
	greyLight: 'rgba(101, 99, 95, 0.5)',
	silver: '#F4F4F2',
	silverLight: '#F0EFEB',
	red: '#A72A2A',
	blue: '#5468FF',
	white: '#FFF',
};

export const TRANSION_MS = '200ms';

export const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px',
};

export const device = {
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
	laptopL: `(min-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
};
