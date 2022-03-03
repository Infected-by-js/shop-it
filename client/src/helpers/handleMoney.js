export const toCents = (val) => val * 100;
export const toDollars = (val) => val / 100;

export const sumDollars = (a, b) => Number(toDollars(toCents(a) + toCents(b)).toFixed(2));
export const subDollars = (a, b) => Number(toDollars(toCents(a) - toCents(b)).toFixed(2));
export const formatCentsToDollars = (cents) =>
	String(Math.trunc(cents)).length <= 3
		? cents
		: Math.trunc(cents / 1000) + ',' + String(cents).slice(1);
