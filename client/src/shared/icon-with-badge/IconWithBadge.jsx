import { AnimatePresence, motion } from 'framer-motion';
import { IconWrapp, Badge } from './IconWithBadge.styled';
import { bounceVariants } from '../../helpers/motions-utils';

export const IconWithBadge = ({ bangeLabel, icon: Icon, isShownBange = true }) => {
	return (
		<IconWrapp>
			<Icon />
			<AnimatePresence exitBeforeEnter>
				{isShownBange && (
					<Badge as={motion.span} variants={bounceVariants} {...bounceVariants}>
						{bangeLabel}
					</Badge>
				)}
			</AnimatePresence>
		</IconWrapp>
	);
};
