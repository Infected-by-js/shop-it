import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { thumbnailsVariantes } from '../motion';
import { PreviewsItem } from './Thumbnails.styled';

export const Thumbnails = ({ images, activeImageIndex, onChangeImage }) => {
	const [thumbnails, setThumbnails] = useState(images);

	return (
		<>
			<button>prev</button>
			<AnimatePresence>
				{thumbnails.map((thumbnail, index) => (
					<PreviewsItem
						as={motion.div}
						key={thumbnail}
						variants={thumbnailsVariantes}
						animate={activeImageIndex === index ? 'active' : 'inactive'}
						onClick={() => onChangeImage(index)}
					>
						<img src={thumbnail} alt='thumbnail' />
					</PreviewsItem>
				))}
			</AnimatePresence>
			<button>next</button>
		</>
	);
};
