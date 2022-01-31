import React from 'react';
import { Wrapper, SortButton } from './SortBlock.styled';

export const SortBlock = ({ categories, activeCategory, changeCategory }) => {
	const handleChangeItem = (value) => {
		changeCategory(value);
	};

	return (
		<Wrapper>
			{categories.map(({ title, value }) => (
				<SortButton
					key={value}
					active={activeCategory === value}
					onClick={() => handleChangeItem(value)}
				>
					{title}
				</SortButton>
			))}
		</Wrapper>
	);
};
