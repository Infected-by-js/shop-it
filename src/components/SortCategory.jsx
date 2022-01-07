import React, { useState } from 'react';
import styled from 'styled-components';
import { color, fonts, fontWeight, TRANSION_MS } from '../styles/constants';

const categories = [
	{ value: 'all', title: 'All' },
	{ value: 'paintings', title: 'Paintings' },
	{ value: 'drawings', title: 'Drawings' },
	{ value: 'sculpture', title: 'Sculpture' },
];

export const SortCategory = () => {
	const [activeCategory, setActiveCategory] = useState(categories[0].value);

	const handleChangeCategory = (event) => {
		setActiveCategory(event.target.value);
	};

	return (
		<CategoryContainer>
			{categories.map(({ title, value }, index) => (
				<CategoryButton
					key={value}
					active={activeCategory === value}
					onClick={handleChangeCategory}
				>
					{title}
				</CategoryButton>
			))}
		</CategoryContainer>
	);
};

const CategoryContainer = styled.div`
	padding: 15px 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;

const CategoryButton = styled.button`
	padding: 5px 17px;
	font-family: ${fonts.arsenal};
	font-size: 1.5rem;
	font-weight: ${fontWeight.arsenal.m};
	border: 1px solid ${color.black};
	border-radius: 4px;

	color: ${({ active }) => (active ? color.white : color.black)};
	background-color: ${({ active }) => (active ? color.black : color.white)};

	transition: color ${TRANSION_MS} ease, background-color ${TRANSION_MS} ease;

	&:hover,
	&:focus {
		color: ${color.white};
		background-color: ${color.black};
	}
`;
