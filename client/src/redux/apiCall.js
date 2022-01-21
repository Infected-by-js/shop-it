import { LOGIN } from '../api/endpoints';
import UserService from '../api/UserService';
import { loginFailure, loginStart, loginSuccess } from './features/user/userSlice';

export const login = async (dispatch, user) => {
	try {
		dispatch(loginStart());
		const response = await UserService.login(LOGIN, user);
		dispatch(loginSuccess(response));
	} catch (error) {
		dispatch(loginFailure(error.response.data));
	}
};
