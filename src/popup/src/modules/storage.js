class Storage {
	set(object) {
		return new Promise((resolve, reject) => {
			try {
				chrome.storage.local.set(object, resolve);
			} catch (e) {
				reject(e);
			}
		});
	}

	get(key) {
		return new Promise((resolve, reject) => {
			chrome.storage.local.get(key, data => {
				if (Object.keys(data).length === 0 && data.constructor === Object) resolve(null);
				resolve(data[key]);
			});
		});
	}
}

const storage = new Storage();
export default storage;

//How to use

// storage.set({test:123}).catch(console.log)
// storage.get('test').then(data => console.log(data)).catch(console.log)
