import React, { useState } from 'react';

import { Wrapper, CategoryButton } from './SortCategories.styled';
import { categories } from '../../assets/categories';
import { useParams } from 'react-router-dom';

export const SortCategories = ({ category }) => {
	const [activeCategory, setActiveCategory] = useState(categories[0].value);
	const params = useParams();

	console.log(params);

	const handleChangeCategory = (value) => {
		params.categoryId = category;
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
