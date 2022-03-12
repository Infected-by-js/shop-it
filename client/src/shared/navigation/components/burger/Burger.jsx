import { BurgerButton } from './Burger.styled';

export const Burger = ({ isMenuOpen, onClick }) => {
	return (
		<BurgerButton isMenuOpen={isMenuOpen} onClick={onClick}>
			<span />
			<span />
			<span />
		</BurgerButton>
	);
};
