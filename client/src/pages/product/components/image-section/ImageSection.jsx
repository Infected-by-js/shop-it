import { useState } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import { Button } from '../../../../shared';
import { MainImage, Thumbnails } from './components-animated';
import { Buttons, ImageWrapp } from './ImageSection.styled';

export const ImageSection = ({ images }) => {
	const [[activeImageIndex, direction], setImage] = useState([0, 0]);
	const firstImageIndex = 0;
	const lastImageIndex = images?.length - 1;

	if (!images) {
		return null;
	}

	const changeToNextImage = (index) => {
		if (index <= lastImageIndex) {
			setImage([index, 1]);
		}
	};

	const changeToPrevImage = (index) => {
		if (index >= firstImageIndex) {
			setImage([index, -1]);
		}
	};

	const handleClickImage = (index) => {
		if (index > activeImageIndex) {
			changeToNextImage(index);
		} else {
			changeToPrevImage(index);
		}
	};

	const handleButtonChangeImage = (event) => {
		const button = event?.target?.closest('button');
		const buttonDirection = button?.dataset?.direction;
		if (!buttonDirection) return;

		if (buttonDirection === 'prev') {
			const isFirstImage = activeImageIndex === firstImageIndex;

			changeToPrevImage(isFirstImage ? lastImageIndex : activeImageIndex - 1);
		} else if (buttonDirection === 'next') {
			const isLastImage = activeImageIndex === lastImageIndex;

			changeToNextImage(isLastImage ? firstImageIndex : activeImageIndex + 1);
		}
	};

	return (
		<>
			<ImageWrapp>
				<MainImage
					imageKey={activeImageIndex}
					src={images[activeImageIndex]}
					direction={direction}
				/>
			</ImageWrapp>

			<Buttons onClick={handleButtonChangeImage}>
				<Button outlined data-direction='prev'>
					<FiArrowLeft />
				</Button>
				<Button outlined data-direction='next'>
					<FiArrowRight />
				</Button>
			</Buttons>
			<Thumbnails
				images={images}
				activeImageIndex={activeImageIndex}
				onChangeImage={handleClickImage}
			/>
		</>
	);
};
