import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ImageWrapp, Previews, PreviewsItem } from './ImageSection.styled';

const sliderVariants = {
	incoming: (direction) => ({
		x: direction > 0 ? '100%' : '-100%',
		scale: 1.2,
		opacity: 0,
	}),
	active: { x: 0, scale: 1, opacity: 1 },
	exit: (direction) => ({
		x: direction > 0 ? '-100%' : '100%',
		scale: 1,
		opacity: 0,
	}),
};

const sliderTransition = {
	duration: 0.5,
	ease: [0.4, 0.2, 0.6, 1],
};

const tabVariant = {
	active: {
		width: '100px',
		opacity: 1,
		transition: {
			type: 'tween',
			duration: 0.4,
		},
	},
	inactive: {
		width: '60px',
		opacity: 0.4,
		transition: {
			type: 'tween',
			duration: 0.4,
		},
	},
};

// on mobile show only one image

export const ImageSection = ({ images }) => {
	const [[imageCount, direction], setImageCount] = useState([0, 0]);

	const [activeImageIndex, setActiveImageIndex] = useState(0);

	if (!images) {
		return null;
	}

	const handleActiveImage = (index) => {
		setActiveImageIndex(index);
	};

	const swipeToImage = (swipeDirection) => {
		setActiveImageIndex(activeImageIndex + swipeDirection);
		setImageCount([imageCount + swipeDirection, swipeDirection]);
	};

	const dragEndHandler = (dragInfo) => {
		const draggedDistance = dragInfo.offset.x;
		const swipeThreshold = 50;
		if (draggedDistance > swipeThreshold) {
			swipeToImage(-1);
		} else if (draggedDistance < -swipeThreshold) {
			swipeToImage(1);
		}
	};

	const skipToImage = (index) => {
		let changeDirection;
		if (index > activeImageIndex) {
			changeDirection = 1;
		} else if (index < activeImageIndex) {
			changeDirection = -1;
		}
		setActiveImageIndex(index);
		setImageCount([index, changeDirection]);
	};

	return (
		<>
			<ImageWrapp>
				<AnimatePresence custom={direction}>
					<motion.img
						src={images[activeImageIndex]}
						alt='product'
						key={images[activeImageIndex]}
						custom={direction}
						variants={sliderVariants}
						initial='incoming'
						animate='active'
						exit='exit'
						transition={sliderTransition}
						drag='x'
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
					/>
				</AnimatePresence>
			</ImageWrapp>
			<Previews>
				<AnimatePresence>
					{images.map((image, index) => (
						<PreviewsItem
							as={motion.div}
							key={image}
							variants={tabVariant}
							animate={activeImageIndex === index ? 'active' : 'inactive'}
							onClick={() => skipToImage(index)}
						>
							<img src={image} alt='preview' />
						</PreviewsItem>
					))}
				</AnimatePresence>
			</Previews>
		</>
	);
};
