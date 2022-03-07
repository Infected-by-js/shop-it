import { motion } from 'framer-motion';
import { thumbnailsVariantes } from '../../../../../../helpers/motions-utils';
import { ThumbnailsWrapp, ThumbnailsItem } from './Thumbnails.styled';

export const Thumbnails = ({ images, activeImageIndex, onChangeImage }) => {
	return (
		<ThumbnailsWrapp>
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
		</ThumbnailsWrapp>
	);
};
