import styled from 'styled-components';
import { categories } from '../../assets/categories';
import { color, fonts, fontWeight } from '../../styles/constants';
import { useNavigate } from 'react-router-dom';
import { routeToCategoryPage } from '../../router/routes';

export const ProductsCategories = () => {
	const navigate = useNavigate();

	const navigateToCategoryPage = (value) => {
		navigate(routeToCategoryPage(value));
	};
	return (
		<Main>
			{categories.map(({ title, value, image }) =>
				image ? (
					<Wrapper onClick={() => navigateToCategoryPage(value)}>
						<Image src={image} />
						<Title>{title}</Title>
					</Wrapper>
				) : null
			)}
		</Main>
	);
};

const Main = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 40px;
	margin-bottom: 150px;
`;

const Wrapper = styled.div`
	position: relative;
	height: 500px;
	width: 500px;
	border-radius: 40px;
	opacity: 0.5;
	transition: opacity 200ms ease;

	&:hover {
		opacity: 1;
	}
	overflow: hidden;
	cursor: pointer;
`;
const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;
const Title = styled.h3`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 2rem;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	text-align: center;
	text-transform: uppercase;
`;
