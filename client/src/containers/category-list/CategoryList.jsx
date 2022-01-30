import React from 'react';

import { categories } from '../../assets/categories';
import { routeToCategoryPage } from '../../router/routes';

import { CategoryItem } from '../../components/';
import { Main } from './CategoryList.styled';

export const CategoryList = () => {
	return (
		<Main>
			{categories.map(({ title, value, image }) =>
				image ? (
					<CategoryItem
						key={value}
						url={routeToCategoryPage(value)}
						title={title}
						imageSrc={image}
					/>
				) : null
			)}
		</Main>
	);
};
