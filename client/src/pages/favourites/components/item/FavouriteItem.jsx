import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

import { favouriteCardAnimation } from '../../../../helpers/motions-utils';
import { Wrapper, Image, Content, Price, Button } from './FavouriteItem.styled';

export const FavouriteItem = (props) => {
	const { product, image, index, onOpenProduct, onRemoveFavourite } = props;

	const handleRemoveFavourite = (event) => {
		event.stopPropagation();
		onRemoveFavourite(product);
	};
	const handleClickToCard = () => {
		onOpenProduct(product.id);
	};

	return (
		<Wrapper
			onClick={handleClickToCard}
			as={motion.div}
			key={product.id}
			layoutId={product.id}
			custom={index}
			{...favouriteCardAnimation}
		>
			<Image src={image} alt={product.title} />

			<Content>
				<Button onClick={handleRemoveFavourite}>
					<FiHeart />
				</Button>
				<Price>${product.price}</Price>
			</Content>
		</Wrapper>
	);
};
