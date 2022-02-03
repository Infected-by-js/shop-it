export const toCents = (val) => val * 100;
export const toDollars = (val) => val / 100;

export const sumDollars = (a, b) => Number(toDollars(toCents(a) + toCents(b)).toFixed(2));
export const subDollars = (a, b) => Number(toDollars(toCents(a) - toCents(b)).toFixed(2));
