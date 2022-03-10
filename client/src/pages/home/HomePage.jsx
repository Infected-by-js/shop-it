import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { setPage } from '../../redux/actions';
import { routeToCategoryPage } from '../../router/routes';

import { Container, Footer, ProductList } from '../../shared';
import { Filters } from './components';

import { categories } from '../../assets/categories';

import { Main, MainTitle, ProductsPageWrapper } from './HomePage.styled';

const initialCategory = categories[0].value;

export const HomePage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { categoryId } = useParams();

	const activeCategory = useMemo(() => {
		return categoryId ?? initialCategory;
	}, [categoryId]);

	const changeCategory = (value) => {
		dispatch(setPage(1));
		navigate(value ? routeToCategoryPage(value) : value);
	};

	return (
		<>
			<ProductsPageWrapper>
				<Main>
					<MainTitle>Original {activeCategory ? activeCategory : 'arts'} for sale</MainTitle>
					<Container>
						<Filters
							list={categories}
							activeItemValue={activeCategory}
							changeActiveItem={changeCategory}
						/>
						<ProductList category={activeCategory} />
					</Container>
				</Main>
				<Footer />
			</ProductsPageWrapper>
		</>
	);
};
