const FileService = require('../services/FileService');

class FileController {
	async getOne(req, res) {
		try {
			const imagePath = FileService.getImage(req.params.id);

			res.sendFile(imagePath);
		} catch (error) {
			res.status(404).json(error);
		}
	}
}

module.exports = new FileController();
