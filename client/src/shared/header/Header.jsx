import { Container, Logo, Navigation } from '../index';
import { Wrapper, Content } from './Header.styled.js';

export const Header = () => {
	return (
		<Wrapper>
			<Container>
				<Content>
					<Logo />
					<Navigation />
				</Content>
			</Container>
		</Wrapper>
	);
};
