import React, { Children, cloneElement, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IconShevronLeft, IconShevronRight } from '../../assets/icons';
import { TRANSION_MS } from '../../styles/constants';
import { Page } from './carousel-compound/Page';
import { CarouselContext } from './carousel-context';

export const Carousel = ({ children, infinite }) => {
	const [pageWidth, setPageWidth] = useState(450);
	const [offset, setOffset] = useState(0);
	const [pages, setPages] = useState([]);
	const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 });
	const [transitionDuration, setTransitionDuration] = useState(200);
	const windowElRef = useRef();

	useEffect(() => {
		if (infinite) {
			setPages([
				cloneElement(children[children.length - 1]),
				...children,
				cloneElement(children[0]),
			]);
			setClonesCount({ head: 1, tail: 1 });
			return;
		}

		setPages(children);
	}, [children, infinite]);

	useEffect(() => {
		const resizeHandler = () => {
			const _width = windowElRef.current.offsetWidth;
			setPageWidth(_width);
			setOffset(-clonesCount.head * pageWidth);
		};
		resizeHandler();
		window.addEventListener('resize', resizeHandler);

		return () => window.removeEventListener('resize', resizeHandler);
	}, [clonesCount, pageWidth]);

	useEffect(() => {
		if (!infinite) return;

		if (offset === 0) {
			setTimeout(() => {
				setTransitionDuration(0);
				setOffset(-(pageWidth * (pages.length - 1 - clonesCount.tail)));
			}, 200);
			return;
		}
		if (offset === -(pageWidth * (pages.length - 1))) {
			setTimeout(() => {
				setTransitionDuration(0);

				setOffset(-clonesCount.head * pageWidth);
			}, 200);
			return;
		}
	}, [infinite, offset, pageWidth, pages, clonesCount]);

	useEffect(() => {
		if (transitionDuration === 0) {
			setTimeout(() => {
				setTransitionDuration(200);
			}, 200);
		}
	}, [transitionDuration]);

	const handleClickLeftArrow = () => {
		setOffset((currentOffset) => {
			const newOffset = currentOffset + pageWidth;
			return Math.min(newOffset, 0);
		});
	};
	const handleClickRightArrow = () => {
		setOffset((currentOffset) => {
			const newOffset = currentOffset - pageWidth;

			const maxOffset = -(pageWidth * (pages.length - 1));
			return Math.max(newOffset, maxOffset);
		});
	};

	return (
		<CarouselContext.Provider value={{ width: pageWidth }}>
			<MainContainer>
				<Arrow onClick={handleClickLeftArrow}>
					<IconShevronLeft />
				</Arrow>
				<Window ref={windowElRef}>
					<AllItemsContainer offset={offset} transition={transitionDuration}>
						{pages}
					</AllItemsContainer>
				</Window>
				<Arrow onClick={handleClickRightArrow}>
					<IconShevronRight />
				</Arrow>
			</MainContainer>
		</CarouselContext.Provider>
	);
};

Carousel.Page = Page;

const MainContainer = styled.div`
	height: 900px;
	width: 100%;
	display: flex;
	align-items: center;
`;
const Window = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;
`;
const AllItemsContainer = styled.div`
	height: 100%;
	display: flex;
	transition: transform ${({ transition }) => transition}ms ease;
	transform: translateX(${({ offset }) => offset}px);
`;

const Arrow = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;
