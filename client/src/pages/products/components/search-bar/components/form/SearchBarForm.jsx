import React, { useState } from 'react';

import { IconSearch } from '../../../../../../assets/images/icons/IconSearch';
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
				<IconSearch />
			</IconWrapp>
			<Input onChange={handleChangeInputValue} value={value} />
			<Button onClick={handleClickButton}>Esc</Button>
		</Form>
	);
};
