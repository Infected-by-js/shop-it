import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Modal, SearchRecent, SearchResult } from '..';
import { IconSearch } from '../../assets/images/icons';

import { routeToProductPage } from '../../router/routes';
import {
	searchProducts,
	changeInputValue,
	addToRecentSearch,
} from '../../redux/features/search/searchActions';

import {
	Content,
	SearchForm,
	IconWrapp,
	Input,
	ButtonClose,
	ResultsContainer,
} from './SearchModal.styled';

const TIMER_COOLDOWN = 800;

export const SearchModal = ({ onClose }) => {
	const [value, setValue] = useState('');
	const { products, recentSearch, inputValue, isLoading } = useSelector(({ search }) => search);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const timerRef = useRef({ timer: null });

	const handleChangeInputValue = ({ target }) => {
		setValue(target.value);

		clearTimeout(timerRef.current.timer);

		timerRef.current.timer = setTimeout(() => {
			dispatch(changeInputValue(target.value));

			if (target.value) {
				dispatch(searchProducts(target.value));
			}
		}, TIMER_COOLDOWN);
	};

	const handleCloseModal = () => {
		clearTimeout(timerRef.current.timer);
		onClose();
		setValue('');
		dispatch(changeInputValue(''));
	};

	const handleRouteToProduct = (product) => {
		navigate(routeToProductPage(product.id));
		dispatch(addToRecentSearch(product));
		handleCloseModal();
	};

	return (
		<Modal onClose={handleCloseModal}>
			<Content>
				<SearchForm>
					<IconWrapp>
						<IconSearch />
					</IconWrapp>
					<Input onChange={handleChangeInputValue} value={value} />
					<ButtonClose onClick={handleCloseModal}>Esc</ButtonClose>
				</SearchForm>

				<ResultsContainer>
					{!inputValue ? (
						<SearchRecent
							recentProducts={recentSearch}
							onRouteToProductPage={handleRouteToProduct}
						/>
					) : isLoading ? (
						<span>Loading...</span>
					) : (
						<SearchResult
							products={products}
							value={value}
							onRouteToProductPage={handleRouteToProduct}
						/>
					)}
				</ResultsContainer>
			</Content>
		</Modal>
	);
};
