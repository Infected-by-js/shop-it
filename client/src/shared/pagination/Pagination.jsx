import { Wrapper, List, Item } from './Pagination.styled';

export const Pagination = ({ pagesCount, activePage, onClick }) => {
	const handleClickPage = (page) => {
		onClick(page);
	};

	if (pagesCount === 1) {
		return null;
	}

	const itemList = (pages) => {
		return pages.map((page) => (
			<Item key={page} onClick={() => handleClickPage(page)} active={activePage === page}>
				{page}
			</Item>
		));
	};

	const dots = () => <Item disabled>...</Item>;

	return (
		<Wrapper>
			<List>
				{pagesCount <= 5 && itemList(generatePagesArray(pagesCount))}

				{pagesCount > 5 && activePage <= 4 && (
					<>
						{itemList([1, 2, 3, 4])}
						{dots()}
						{itemList([pagesCount])}
					</>
				)}

				{pagesCount > 5 && activePage > 4 && activePage <= pagesCount - 3 && (
					<>
						{itemList([1])}
						{dots()}
						{itemList([activePage - 1, activePage, activePage + 1])}
						{dots()}
						{itemList([pagesCount])}
					</>
				)}

				{pagesCount > 5 && activePage >= pagesCount - 2 && activePage <= pagesCount && (
					<>
						{itemList([1, 2])}
						{dots()}
						{itemList([pagesCount - 2, pagesCount - 1, pagesCount])}
					</>
				)}
			</List>
		</Wrapper>
	);
};

const generatePagesArray = (pagesCount) => {
	const result = [];

	for (let i = 1; i <= pagesCount; i++) {
		result.push(i);
	}

	return result;
};
