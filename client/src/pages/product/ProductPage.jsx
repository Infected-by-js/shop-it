import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header, Overview, Info } from '../../containers';
import ProductService from '../../api/ProductService';
import { Main, Column } from './ProductPage.styled';
import { addProduct } from '../../redux/features/cart/cartSlice';
import { useDispatch } from 'react-redux';

export const ProductPage = () => {
	const params = useParams();
	const [product, setProduct] = useState({});
	const dispatch = useDispatch();

	useEffect(() => {
		const getProduct = async () => {
			const response = await ProductService.fetchOne(params.productId);

			setProduct(response);
		};

		getProduct();
	}, []);

	const handleAddtoCart = () => {
		dispatch(addProduct(product));
	};

	return (
		<>
			<Header />
			<Main>
				<Column>
					<Info product={product} addToCart={handleAddtoCart} />
				</Column>
				<Column>
					<Overview images={product.images} />
				</Column>
			</Main>
		</>
	);
};
