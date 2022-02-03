import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductItem } from '../../components';
import { Wrapper } from './ProductList.styled';
import { getProducts } from '../../redux/actions/products';
import { useNavigate } from 'react-router-dom';

export const ProductList = ({ category = '', limit = 8 }) => {
	const { products, isLoading, error } = useSelector(({ products }) => products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts({ category, limit }));
	}, [category, limit]);

	return (
		<Wrapper>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</Wrapper>
	);
};
