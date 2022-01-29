const path = require('path');
const fs = require('fs');

class FileService {
	getImage(id) {
		const dirPath = path.resolve('static');

		return `${dirPath}/${id}`;
	}

	deleteImages(images) {
		images.forEach((image) => {
			fs.unlinkSync(image.path);
		});
	}
}

module.exports = new FileService();
