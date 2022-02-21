class StorageService {
	getItem(key) {
		const localStorageItem = localStorage.getItem(key);
		return localStorageItem;
	}

	saveItem(key, value) {
		localStorage.setItem(key, value);
	}
	deleteItem(key) {
		localStorage.removeItem(key);
	}
}

export default new StorageService();
