import React, { useState } from 'react';

import { Wrapper, CategoryButton } from './SortCategories.styled';
import { categories } from '../../assets/categories';

export const SortCategories = () => {
	const [activeCategory, setActiveCategory] = useState(categories[0].value);

	const handleChangeCategory = (value) => {
		setActiveCategory(value);
	};

	return (
		<Wrapper>
			{categories.map(({ title, value }) => (
				<CategoryButton
					key={value}
					active={activeCategory === value}
					onClick={() => handleChangeCategory(value)}
				>
					{title}
				</CategoryButton>
			))}
		</Wrapper>
	);
};
