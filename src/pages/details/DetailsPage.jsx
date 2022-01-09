import React from 'react';
import * as Styled from './DetailsPage.styled';
import { Header, Overview, Info } from '../../containers/';

export const DetailsPage = () => {
	return (
		<>
			<Header />
			<Styled.Main>
				<Styled.Column>
					<Info />
				</Styled.Column>
				<Styled.Column>
					<Overview />
				</Styled.Column>
			</Styled.Main>
		</>
	);
};
