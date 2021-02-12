//netflix volume
window.addEventListener('wheel', function (e) {
	let videoController = document.querySelector('video');

	let wheelStatus = Math.sign(e.deltaY);
	if (wheelStatus > 0) {
		if (videoController.volume > 0.1) videoController.volume = videoController.volume - 0.1;
	} else {
		if (videoController.volume <= 0.9 && videoController.volume > 0)
			videoController.volume = videoController.volume + 0.1;
	}
});

// skip intro
setInterval(() => {
	let intro = document.querySelector('.skip-credits');
	if (intro) {
		if (!intro.classList.contains('skip-credits-hidden')) {
			let button = intro.querySelector('span');
			if (button) button.click();
		}
	}
}, 2000);
