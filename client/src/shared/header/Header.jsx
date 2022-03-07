import { motion } from 'framer-motion';

import { Container, Logo, Navigation } from '../';
import { useRouting } from '../../hooks/useRouting';
import { LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE } from '../../router/routes';
import { headerFadeInUpVariants } from '../../helpers/motions-utils';
import { Wrapper, Content } from './Header.styled.js';

export const Header = () => {
	const { currentPage } = useRouting();

	const isAuthPage = currentPage === LOGIN_PAGE_ROUTE || currentPage === REGISTER_PAGE_ROUTE;

	return (
		<Wrapper as={motion.header} variants={headerFadeInUpVariants} {...headerFadeInUpVariants}>
			<Container>
				<Content>
					<Logo />
					{!isAuthPage && <Navigation />}
				</Content>
			</Container>
		</Wrapper>
	);
};
