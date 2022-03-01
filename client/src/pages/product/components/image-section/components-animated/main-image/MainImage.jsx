import { AnimatePresence, motion } from 'framer-motion';

import { mainImageVariants } from '../motion';

export const MainImage = ({ imageKey, src, direction }) => {
	return (
		<>
			<AnimatePresence>
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
			</AnimatePresence>
		</>
	);
};
