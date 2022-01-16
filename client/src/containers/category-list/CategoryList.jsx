import React from 'react';
import { useNavigate } from 'react-router-dom';

import { categories } from '../../assets/categories';
import { routeToCategoryPage } from '../../router/routes';

import { CategoryItem } from '../../components/';
import { Main } from './CategoryList.styled';

export const CategoryList = () => {
	const navigate = useNavigate();

	const navigateToCategoryPage = (value) => {
		navigate(routeToCategoryPage(value));
	};

	return (
		<Main>
			{categories.map(({ title, value, image }) =>
				image ? (
					<CategoryItem
						key={value}
						onClick={() => navigateToCategoryPage(value)}
						title={title}
						imageSrc={image}
					/>
				) : null
			)}
		</Main>
	);
};
