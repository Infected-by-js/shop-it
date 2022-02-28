import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Header, Container, Footer, ProductList } from '../../shared';
import { Filters } from './components';
import { categories } from '../../assets/categories';
import { routeToCategoryPage } from '../../router/routes';

import { Main, MainTitle, ProductsPageWrapper } from './HomePage.styled';

const initialCategory = categories[0].value;

export const HomePage = () => {
	const navigate = useNavigate();
	const params = useParams();

	const activeCategory = useMemo(() => {
		return params.categoryId ?? initialCategory;
	}, [params.categoryId]);

	const changeCategory = (value) => {
		navigate(value ? routeToCategoryPage(value) : value);
	};

	return (
		<ProductsPageWrapper>
			<Header />
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
	);
};
