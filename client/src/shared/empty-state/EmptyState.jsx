import { motion } from 'framer-motion';
import { FcOpenedFolder } from 'react-icons/fc';

import { bounceVariants } from '../../helpers/motions-utils';
import { Wrapper, Icon } from './EmptyState.styled';

export const EmptyState = ({ label }) => {
	return (
		<Wrapper as={motion.div} variants={bounceVariants} {...bounceVariants}>
			{label}
			<Icon>
				<FcOpenedFolder />
			</Icon>
		</Wrapper>
	);
};
