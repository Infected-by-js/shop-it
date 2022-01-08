import React, { useState } from 'react';

import * as Styled from './SortCategories.styled';
import { categories } from '../../assets/categories';

export const SortCategories = () => {
	const [activeCategory, setActiveCategory] = useState(categories[0].value);

	const handleChangeCategory = (value) => {
		setActiveCategory(value);
	};

	return (
		<Styled.SortCategories>
			{categories.map(({ title, value }) => (
				<Styled.CategoryButton
					key={value}
					active={activeCategory === value}
					onClick={() => handleChangeCategory(value)}
				>
					{title}
				</Styled.CategoryButton>
			))}
		</Styled.SortCategories>
	);
};
