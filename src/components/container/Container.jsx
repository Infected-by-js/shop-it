import React from 'react';
import { Wrapper } from './Container.styled';

export const Container = ({ children, ...props }) => {
	return <Wrapper {...props}>{children}</Wrapper>;
};
