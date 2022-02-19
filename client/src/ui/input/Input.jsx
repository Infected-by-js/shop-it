import React, { forwardRef } from 'react';

import { StyledInput } from './Input.styled';

export const Input = forwardRef(({ ...props }, ref) => {
	return <StyledInput {...props} ref={ref} />;
});
