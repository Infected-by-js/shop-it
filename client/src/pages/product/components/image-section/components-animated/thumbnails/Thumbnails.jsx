import { AnimatePresence, motion } from 'framer-motion';
import { thumbnailsVariantes } from '../motion';
import { ThumbnailsWrapp, ThumbnailsItem } from './Thumbnails.styled';

export const Thumbnails = ({ images, activeImageIndex, onChangeImage }) => {
	return (
		<ThumbnailsWrapp>
			<AnimatePresence>
				{images.map((thumbnail, index) => (
					<ThumbnailsItem
						as={motion.div}
						key={thumbnail}
						variants={thumbnailsVariantes}
						animate={activeImageIndex === index ? 'active' : 'inactive'}
						onClick={() => onChangeImage(index)}
					>
						<img src={thumbnail} alt='thumbnail' />
					</ThumbnailsItem>
				))}
			</AnimatePresence>
		</ThumbnailsWrapp>
	);
};
