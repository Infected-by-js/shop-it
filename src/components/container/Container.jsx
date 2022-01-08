import React from 'react';
import * as Styled from './Container.styled';

export const Container = ({ children, ...props }) => {
	return <Styled.Container {...props}>{children}</Styled.Container>;
};
