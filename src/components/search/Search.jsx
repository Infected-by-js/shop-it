import React from 'react';
import * as S from './Search.styled.js';
import { IconSearch } from '../../assets/icons';

export const Search = () => {
	return (
		<S.Search>
			<S.Input />
			<S.Label>
				<IconSearch />
			</S.Label>
		</S.Search>
	);
};
