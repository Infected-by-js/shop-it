import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';

import { removeFromFavourites } from '../../redux/actions';
import { favouriteProductsSelector } from '../../redux/selectors';
import { routeToProductPage } from '../../router/routes';

import { useRouting } from '../../hooks';
import { defaultPageFadeInVariants, favouritePageAnimation } from '../../helpers/motions-utils';

import { Container, EmptyState } from '../../shared';
import { FavouriteItem } from './components/';

import { Wrapper, Title, Content, FavouriteList } from './FavouritesPage.styled.js';

export const FavouritesPage = () => {
	const favourites = useSelector(favouriteProductsSelector);
	const dispatch = useDispatch();
	const { navigateTo } = useRouting();

	const handleRemoveFromFavourite = (item) => {
		dispatch(removeFromFavourites(item));
	};

	const handleRouteToProduct = (id) => {
		navigateTo(routeToProductPage(id));
	};

	return (
		<Wrapper as={motion.div}>
			<Container>
				<Title as={motion.h1} {...defaultPageFadeInVariants}>
					Your Wishlist
				</Title>

				<Content as={motion.div} layout='position' {...favouritePageAnimation} key='fav'>
					{!favourites.length ? (
						<EmptyState label='Your Wishlist is Empty' />
					) : (
						<FavouriteList>
							<AnimatePresence>
								{favourites.map((favourite, index) => (
									<FavouriteItem
										key={favourite.id}
										image={favourite.images[0]}
										index={index}
										product={favourite}
										onRemoveFavourite={handleRemoveFromFavourite}
										onOpenProduct={handleRouteToProduct}
									/>
								))}
							</AnimatePresence>
						</FavouriteList>
					)}
				</Content>
			</Container>
		</Wrapper>
	);
};
