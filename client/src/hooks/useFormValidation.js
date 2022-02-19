import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const useFormValidation = (schema) => {
	const options = { mode: 'onBlur', resolver: yupResolver(schema) };
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm(options);

	return { register, handleSubmit, errors };
};
