import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { changeInputValue, searchProducts, addToRecentSearch } from '../../redux/actions';
import { searchSelector } from '../../redux/selectors';
import { routeToProductPage } from '../../router/routes';
import { useDebounceInput } from '../../hooks/useDebounceInput';

import {
	TriggerButton,
	SearchBarForm,
	SearchBarModal,
	SearchBarRecent,
	SearchBarResult,
} from './components/';

export const SearchBar = () => {
	const { products, recentSearch, inputValue, isLoading } = useSelector(searchSelector);
	const { debounce, input } = useDebounceInput(1000);
	const [openModal, setOpenModal] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChangeInputValue = (value) => {
		input(() => {
			dispatch(changeInputValue(value));

			if (value) {
				dispatch(searchProducts(value));
			}
		});
	};

	const handleCloseModal = () => {
		debounce();
		setOpenModal(false);

		inputValue && dispatch(changeInputValue(''));
	};

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleRouteToProduct = (product) => {
		navigate(routeToProductPage(product.id));
		dispatch(addToRecentSearch(product));
		handleCloseModal();
	};

	return (
		<>
			<TriggerButton onTrigger={handleOpenModal} />
			{openModal && (
				<SearchBarModal onCloseModal={handleCloseModal}>
					<SearchBarForm
						onClickFormButton={handleCloseModal}
						onChangeInput={handleChangeInputValue}
					/>
					<SearchBarModal.Content>
						{!inputValue ? (
							<SearchBarRecent
								recentProducts={recentSearch}
								onRouteToProductPage={handleRouteToProduct}
							/>
						) : isLoading ? (
							<span>Loading...</span>
						) : (
							<SearchBarResult
								products={products}
								value={inputValue}
								onRouteToProductPage={handleRouteToProduct}
							/>
						)}
					</SearchBarModal.Content>
				</SearchBarModal>
			)}
		</>
	);
};
