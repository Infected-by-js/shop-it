import { useSelector } from 'react-redux';
import { ProductItem } from '../../components';
import { Wrapper } from './ProductList.styled';

export const ProductList = () => {
	const { products } = useSelector(({ products }) => products);
	return (
		<Wrapper>
			{products.map((product) => (
				<ProductItem key={product.image_src} {...product} />
			))}
		</Wrapper>
	);
};
