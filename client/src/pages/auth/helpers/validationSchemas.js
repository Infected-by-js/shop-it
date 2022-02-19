import * as yup from 'yup';

export const loginSchema = yup.object().shape({
	username: yup
		.string()
		.required('The Username is required!')
		.min(4, 'Username is too small')
		.matches(/^[a-z]+$/gi, 'Unexpected symbols!'),
	password: yup
		.string()
		.required('The Password is required!')
		.min(4, 'Password must contain at least 4 symbols')
		.max(16, 'Password is too long. Max length 16 symbols'),
});

export const registerSchema = yup.object().shape({
	username: yup
		.string()
		.required('The Username is required!')
		.min(4, 'Username is too small')
		.matches(/^[a-z]+$/gi, 'Unexpected symbols!'),
	email: yup.string().required('The Email is required!').email('Invalid email'),
	password: yup
		.string()
		.required('The Password is required!')
		.min(4, 'Password must contain at least 4 symbols')
		.max(16, 'Password is too long. Max length 16 symbols'),
	confirm_password: yup.string().oneOf([yup.ref('password')], 'Passwords must match!'),
});
