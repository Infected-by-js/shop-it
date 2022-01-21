import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Wrapper, Image, ButtonsWrapper, Button } from './ProductItem.styled';
import { IconHeart, IconSearch, IconCart } from '../../assets/images/icons';
import { routeToDetailsPage } from '../../router/routes';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/features/cart/cartSlice';

export const ProductItem = ({ product }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClickAddToCart = () => {
		dispatch(addProduct(product));
	};
	const handleClickDetails = () => {
		navigate(routeToDetailsPage(product._id));
	};
	const handleClickAddToFavourite = () => {
		console.log('Add to Favourite');
	};

	return (
		<Wrapper>
			<Image src={product.image_set[0]} alt={product.title} />
			<ButtonsWrapper>
				<Button onClick={handleClickAddToCart}>
					<IconCart />
				</Button>
				<Button onClick={handleClickDetails}>
					<IconSearch />
				</Button>
				<Button onClick={handleClickAddToFavourite}>
					<IconHeart />
				</Button>
			</ButtonsWrapper>
		</Wrapper>
	);
};
