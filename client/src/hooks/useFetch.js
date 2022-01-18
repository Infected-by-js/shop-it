import { useState } from 'react';

export const useFetch = (callback) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const fetchData = (args) => {
		try {
			setLoading(true);
			callback(args);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	return [fetchData, loading, error];
};
