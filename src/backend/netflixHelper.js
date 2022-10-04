//storage//
// import storage from '../popup/src/modules/storage';
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
				if (Object.keys(data).length === 0 && data.constructor === Object)
					reject('no data returned by localStorage');
				resolve(data[key]);
			});
		});
	}
}

const storage = new Storage();
//How to use

//end storage//

async function extenisonController() {
	//await storage.set({ activeExtension: true });
	const activeStatus = await storage.get('activeExtension');
	//console.log(activeStatus);

	//condition
	if (activeStatus) {
		mainEx();
	}
}

extenisonController();

//mainfunction
function mainEx() {
	//netflix volume
	window.addEventListener('wheel', function (e) {
		let videoController = document.querySelector('video');
		if (videoController) {
			let wheelStatus = Math.sign(e.deltaY);
			if (wheelStatus > 0) {
				if (videoController.volume > 0.1) videoController.volume = videoController.volume - 0.1;
			} else {
				if (videoController.volume <= 0.9 && videoController.volume > 0)
					videoController.volume = videoController.volume + 0.1;
			}
		}
	});

	//console.log('extension enabled');

	//hide header big video section
	async function hideSections() {
		//console.log('triggerd');

		// Auto Skip Intro and Recap
		let intro = document.querySelector('button.watch-video--skip-content-button');
		if (intro) {
			intro.click();
		}

		//next episode on button appear
		let nextEpButton = document.querySelector('button[data-uia="next-episode-seamless-button"]');
		if (nextEpButton) {
			nextEpButton.click();
		}

		/**
		 * get data from storage
		 */
		const headerCheckBoxStatus = await storage.get('hideHeaderVideo');
		const myListStatus = await storage.get('myList');
		const continueWatchingStatus = await storage.get('continueWatching');
		const trendingNowStatus = await storage.get('trendingNow');
		const keyboardShortcuts = await storage.get('keyboardShortcuts');

		//////////hide header video animation
		const headerVideoSound = document.querySelector('video');
		const headerVideoContainer = document.querySelector('span.volatile-billboard-animations-container');

		if (headerCheckBoxStatus) {
			if (headerVideoContainer) {
				headerVideoContainer.style.display = 'none';

				if (headerVideoSound) {
					headerVideoSound.volume = 0;
				}
			}
		}

		///////hide my list
		//hide my list
		const getMyList = document.querySelector('[data-list-context="queue"]');
		if (myListStatus) {
			if (getMyList) {
				getMyList.style.display = 'none';
			}
		}

		/////// hide Continue Watching
		const getContinueWatching = document.querySelector('[data-list-context="continueWatching"]');
		if (continueWatchingStatus) {
			if (getContinueWatching) {
				getContinueWatching.style.display = 'none';
			}
		}

		/////////// hide Trending Now
		const getTrendingNow = document.querySelector('[data-list-context="trendingNow"]');
		if (trendingNowStatus) {
			if (getTrendingNow) {
				getTrendingNow.style.display = 'none';
			}
		}

		//////////keybaord Shortcuts
		let nextEpisode = document.querySelector('button[aria-label="Next Episode"]');
		document.addEventListener('keypress', function (e) {
			//storage checker
			if (keyboardShortcuts) {
				if (e.key === 'n' || e.key === 'N') {
					if (nextEpisode) nextEpisode.click();
				}
			}
		});
	}
	//hideSections();
	const observer = new MutationObserver(hideSections);
	observer.observe(document.body, { childList: true, attributes: true, subtree: true });
}
