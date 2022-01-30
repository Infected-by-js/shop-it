import React from 'react';

import { IconSearch } from '../../assets/images/icons';
import { Wrapper, Input, Label } from './Search.styled';

export const Search = () => {
	return (
		<Wrapper>
			<Label>
				<IconSearch />
				<Input />
			</Label>
		</Wrapper>
	);
};
