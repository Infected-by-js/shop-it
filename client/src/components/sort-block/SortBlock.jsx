import React, { useState } from 'react';

import { Wrapper, SortButton } from './SortBlock.styled';

export const SortBlock = ({ categories, activeCategory, changeActiveCategory }) => {
	const [activeItem, setActiveItem] = useState(activeCategory || categories[0].value);

	const handleChangeItem = (value) => {
		changeActiveCategory(value);
		setActiveItem(value);
	};

	return (
		<Wrapper>
			{categories.map(({ title, value }) => (
				<SortButton
					key={value}
					active={activeItem === value}
					onClick={() => handleChangeItem(value)}
				>
					{title}
				</SortButton>
			))}
		</Wrapper>
	);
};
