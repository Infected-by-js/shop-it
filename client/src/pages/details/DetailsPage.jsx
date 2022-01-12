import React from 'react';
import { Header, Overview, Info } from '../../containers/';
import { Main, Column } from './DetailsPage.styled';

export const DetailsPage = () => {
	return (
		<>
			<Header />
			<Main>
				<Column>
					<Info />
				</Column>
				<Column>
					<Overview />
				</Column>
			</Main>
		</>
	);
};
