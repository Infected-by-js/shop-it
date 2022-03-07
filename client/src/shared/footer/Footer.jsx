import { motion } from 'framer-motion';
import React from 'react';
import { footerFadeInUpVariants } from '../../helpers/motions-utils';

import { Copyright } from '../copyright/Copyright';

import { Wrapper } from './Footer.styled';

export const Footer = () => {
	return (
		<Wrapper as={motion.footer} variants={footerFadeInUpVariants} {...footerFadeInUpVariants}>
			<Copyright />
		</Wrapper>
	);
};
