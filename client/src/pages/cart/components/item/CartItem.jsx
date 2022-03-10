import { Wrapper, Image, Details, TextWrapp, Text, Price, RemoveButton } from './CartItem.styled';
import { motion } from 'framer-motion';
import { cartCardAnimation } from '../../../../helpers/motions-utils';

export const CartItem = (props) => {
	const { product, index, image, title, author, style, size, price, onRemove, onRouteToProduct } =
		props;

	const handleRemoveFromCart = (event) => {
		event.stopPropagation();
		onRemove(product);
	};

	const handleClickProduct = () => {
		onRouteToProduct(product.id);
	};

	return (
		<Wrapper
			onClick={handleClickProduct}
			as={motion.div}
			key={product.id}
			custom={index}
			{...cartCardAnimation}
		>
			<Image src={image} />

			<Details>
				<TextWrapp>
					<Text style={{ fontWeight: 700 }}>{title}</Text>
					<Text>by {author}</Text>
					<Text>{style}</Text>
					<Text>{size}</Text>
				</TextWrapp>
				<RemoveButton onClick={handleRemoveFromCart}>Discart</RemoveButton>
			</Details>
			<Price>${price}</Price>
		</Wrapper>
	);
};
