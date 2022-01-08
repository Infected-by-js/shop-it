import React from 'react';

import * as Styled from './Search.styled';
import { IconSearch } from '../../assets/images/icons';

export const Search = () => {
	return (
		<Styled.Search>
			<Styled.Input />
			<Styled.Label>
				<IconSearch />
			</Styled.Label>
		</Styled.Search>
	);
};
