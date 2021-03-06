import { motion } from 'framer-motion';
import { bounceVariants } from '../../../../helpers/motions-utils';
import { Wrapper, FilterItem } from './Filters.styled';

export const Filters = ({ list, activeItemValue, changeActiveItem }) => {
	const handleChangeItem = (value) => {
		if (value !== activeItemValue) {
			changeActiveItem(value);
		}
	};

	return (
		<Wrapper as={motion.div} {...bounceVariants}>
			{list.map(({ title, value }) => (
				<FilterItem
					key={title}
					active={activeItemValue === value}
					onClick={() => handleChangeItem(value)}
				>
					{title}
				</FilterItem>
			))}
		</Wrapper>
	);
};
