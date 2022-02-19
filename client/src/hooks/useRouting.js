import { useParams, useNavigate, useLocation } from 'react-router-dom';

export const useRouting = () => {
	const navigateTo = useNavigate();
	const params = useParams();
	const location = useLocation();
	const currentPage = location.pathname;

	return {
		currentPage,
		navigateTo,
		params,
	};
};
