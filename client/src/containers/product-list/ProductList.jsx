import { useSelector } from 'react-redux';
import { Product } from '../../components';
import { Wrapper } from './ProductList.styled';

export const ProductList = () => {
	const { products } = useSelector(({ products }) => products);
	return (
		<Wrapper>
			{products.map((product) => (
				<Product key={product.image_src} {...product} />
			))}
		</Wrapper>
	);
};
