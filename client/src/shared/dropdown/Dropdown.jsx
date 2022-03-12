import { Container, Label, Menu, Item } from './Dropdown.styled';

export const Dropdown = ({ children, label, ...restProps }) => {
	return (
		<Container {...restProps}>
			<Label>{label}</Label>
			<Menu>{children}</Menu>
		</Container>
	);
};

Dropdown.Item = ({ children }) => {
	return <Item>{children}</Item>;
};
