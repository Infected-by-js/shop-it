import { useState } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import { useViewport } from '../../../../hooks/useViewport';
import { Button } from '../../../../shared';
import { MainImage, Thumbnails } from './components-animated';
import { Buttons, ImageWrapp, Previews } from './ImageSection.styled';

const MOBILE_BREAKPOINT = 768;

export const ImageSection = ({ images }) => {
	const [[activeImageIndex, direction], setImage] = useState([0, 0]);
	const { isBreakpoint } = useViewport(MOBILE_BREAKPOINT);
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

	const changeImage = (index) => {
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
			changeToPrevImage(activeImageIndex - 1);
		} else if (buttonDirection === 'next') {
			changeToNextImage(activeImageIndex + 1);
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

			{isBreakpoint ? (
				<Buttons onClick={handleButtonChangeImage}>
					<Button outlined data-direction='prev' disabled={activeImageIndex === firstImageIndex}>
						<FiArrowLeft />
					</Button>
					<Button outlined data-direction='next' disabled={activeImageIndex === lastImageIndex}>
						<FiArrowRight />
					</Button>
				</Buttons>
			) : (
				<Previews>
					<Thumbnails
						images={images}
						activeImageIndex={activeImageIndex}
						onChangeImage={changeImage}
					/>
				</Previews>
			)}
		</>
	);
};
