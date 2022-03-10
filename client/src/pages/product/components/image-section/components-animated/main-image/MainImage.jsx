import { AnimatePresence, motion } from 'framer-motion';

import { mainImageVariants } from '../../../../../../helpers/motions-utils';

export const MainImage = ({ imageKey, src, direction, ...restProps }) => {
	return (
		<AnimatePresence custom={direction}>
			<motion.img
				key={imageKey}
				src={src}
				alt='product'
				custom={direction}
				variants={mainImageVariants}
				{...mainImageVariants}
				{...restProps}
			/>
		</AnimatePresence>
	);
};
