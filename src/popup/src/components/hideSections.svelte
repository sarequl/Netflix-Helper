<script>
	import storage from '../modules/storage';
	import { onMount } from 'svelte';

	//controll checkboxes
	async function hideSectionCheckboxes(hideHeaderVideo, myList, continueWatching, trendingNow) {
		//set value
		await storage.set({ hideHeaderVideo, myList, continueWatching, trendingNow });
		//set value
	}
	let hideHeaderVideo;
	let myList;
	let continueWatching;
	let trendingNow;
	$: hideSectionCheckboxes(hideHeaderVideo, myList, continueWatching, trendingNow);
	onMount(async () => {
		const headerVideoStatus = await storage.get('hideHeaderVideo');
		const myListStatus = await storage.get('myList');
		const continueWatchingStatus = await storage.get('continueWatching');
		const trendingNowStatus = await storage.get('trendingNow');

		hideHeaderVideo = headerVideoStatus;
		myList = myListStatus;
		continueWatching = continueWatchingStatus;
		trendingNow = trendingNowStatus;
	});

	export let changeHandler;
</script>

<section class="ci_check-box">
	<div class="ci_container">
		<form action="#">
			<div class="ci_check">
				<input type="checkbox" id="hide1" bind:checked={hideHeaderVideo} on:change={changeHandler} />
				<label for="hide1">Header Video</label>
			</div>
			<div class="ci_check">
				<input type="checkbox" id="hide2" bind:checked={myList} on:change={changeHandler} />
				<label for="hide2">MyList</label>
			</div>
			<div class="ci_check">
				<input type="checkbox" id="hide3" bind:checked={continueWatching} on:change={changeHandler} />
				<label for="hide3">Continue Watching</label>
			</div>
			<div class="ci_check">
				<input type="checkbox" id="hide4" bind:checked={trendingNow} on:change={changeHandler} />
				<label for="hide4">Trending Now</label>
			</div>
		</form>
	</div>
</section>
