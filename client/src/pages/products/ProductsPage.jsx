import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getProducts } from '../../redux/actions/products';

import { Header, Footer, ProductList } from '../../containers';
import { Container, SortBlock } from '../../components/';
import { Main, MainTitle, ProductsPageWrapper } from './ProductsPage.styled';
import { categories } from '../../assets/categories';

export const ProductsPage = () => {
	const { products, isLoading, error } = useSelector(({ products }) => products);
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();
	const category = params.categoryId ?? '';

	useEffect(() => {
		dispatch(getProducts({ category }));
	}, [category]);

	const changeCategory = (value) => {
		if (value !== category) {
			navigate(value);
		}
	};

	return (
		<ProductsPageWrapper>
			<Header />
			<Main>
				<MainTitle>Original {category ? category : 'arts'} for sale</MainTitle>
				<Container>
					<SortBlock
						categories={categories}
						activeCategory={category}
						changeCategory={changeCategory}
					/>
					<ProductList products={products} />
				</Container>
			</Main>
			<Footer />
		</ProductsPageWrapper>
	);
};
