import { motion } from 'framer-motion';
import { Wrapp, ButtonStyled } from './ButtonAnimated.styled';

export const ButtonAnimated = ({ onClick, children, isActive, ...restProps }) => {
	return (
		<Wrapp isActive={isActive}>
			<ButtonStyled
				as={motion.button}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={onClick}
				{...restProps}
			>
				{children}
			</ButtonStyled>
		</Wrapp>
	);
};
