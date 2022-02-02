import React from 'react';
import { Wrapper, SortButton } from './SortByCategory.styled';

export const SortByCategory = ({ categories, activeCategory, changeCategory }) => {
	const handleChangeItem = (value) => {
		if (value !== activeCategory) {
			changeCategory(value);
		}
	};

	return (
		<Wrapper>
			{categories.map(({ title, value }) => (
				<SortButton
					key={title}
					active={activeCategory === value}
					onClick={() => handleChangeItem(value)}
				>
					{title}
				</SortButton>
			))}
		</Wrapper>
	);
};
