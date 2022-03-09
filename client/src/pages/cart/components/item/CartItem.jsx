import { Wrapper, Image, Details, TextWrapp, Text, Price, RemoveButton } from './CartItem.styled';

export const CartItem = (props) => {
	const { product, image, title, author, style, size, price, onRemove, onRouteToProduct } = props;

	const handleRemoveFromCart = (event) => {
		event.stopPropagation();
		onRemove(product);
	};

	const handleClickProduct = () => {
		onRouteToProduct(product.id);
	};

	return (
		<Wrapper onClick={handleClickProduct}>
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
