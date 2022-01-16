import { Header, Footer, ProductList } from '../../containers';
import { Container, SortCategories } from '../../components/';
import { Main, MainTitle } from './ProductsPage.styled';
import { useLocation } from 'react-router-dom';

export const ProductsPage = () => {
	const location = useLocation();
	const category = location.pathname.split('/')[1];
	return (
		<>
			<Header />
			<Main>
				<MainTitle>Original {category} for sale</MainTitle>
				<Container>
					<SortCategories category={category} />
					<ProductList />
				</Container>
			</Main>
			<Footer />
		</>
	);
};
