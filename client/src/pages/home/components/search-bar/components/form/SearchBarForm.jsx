import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Form, IconWrapp, Input, Button } from './SearchBarForm.styled';

export const SearchBarForm = ({ onChangeInput, onClickFormButton }) => {
	const [value, setValue] = useState('');

	const handleChangeInputValue = ({ target }) => {
		setValue(target.value);
		onChangeInput(target.value);
	};

	const handleClickButton = () => {
		onClickFormButton();
		setValue('');
	};

	return (
		<Form>
			<IconWrapp>
				<FiSearch />
			</IconWrapp>
			<Input onChange={handleChangeInputValue} value={value} />
			<Button onClick={handleClickButton}>Esc</Button>
		</Form>
	);
};
