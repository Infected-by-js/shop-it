import { motion } from 'framer-motion';

import { mainImageVariants } from '../../../../../../helpers/motions-utils';

export const MainImage = ({ imageKey, src, direction }) => {
	return (
		<>
			<motion.img
				key={imageKey}
				src={src}
				alt='product'
				custom={direction}
				variants={mainImageVariants}
				initial='incoming'
				animate='active'
				exit='exit'
			/>
		</>
	);
};
