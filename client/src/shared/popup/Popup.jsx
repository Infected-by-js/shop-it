import React, { useEffect, useRef, useState } from 'react';

import { Portal } from '../portal/Portal';
import * as S from './Popup.styled.js';

export const Popup = ({ anchorEl, isOpened, onClose, children }) => {
	const [popupPos, setPopupPos] = useState({ top: 0, left: 0 });
	const elRef = useRef(null);

	useEffect(() => {
		if (isOpened) {
			const { top, right } = anchorEl?.current?.getBoundingClientRect();
			const width = elRef?.current?.offsetWidth;
			setPopupPos((prev) => ({ ...prev, top: top + 80, left: right - width }));
		}
	}, [isOpened]);

	if (!isOpened) {
		return null;
	}

	return (
		<Portal>
			<S.PopupContainer>
				<S.Overlay onClick={onClose} />
				<S.Content top={popupPos.top} left={popupPos.left} ref={elRef}>
					{children}
				</S.Content>
			</S.PopupContainer>
		</Portal>
	);
};
