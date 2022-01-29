const { v4 } = require('uuid');
const path = require('path');

class FileService {
	saveFile(file) {
		const fileName = v4() + '.jpg';
		const filePath = path.resolve('static', fileName);
		file.mv(filePath);

		return fileName;
	}
}

module.exports = new FileService();
