<script>
	import storage from '../modules/storage';
	import { onMount } from 'svelte';
	export let isRefresh;
	export let falseRefresh;

	let oldValues = [];

	const reloadHelper = args => {
		let isReload = false;
		args.forEach((e, i) => {
			if (e !== undefined) {
				if (oldValues[i] !== e) isReload = true;
			}
		});
		isReload ? isRefresh() : falseRefresh();
	};

	//controll checkboxes

	let hideHeaderVideo, myList, continueWatching, trendingNow;
	const hideSectionCheckboxes = async (...args) => {
		reloadHelper(args);
		const [hideHeaderVideo, myList, continueWatching, trendingNow] = args;
		await Promise.all([
			storage.set({ hideHeaderVideo }),
			storage.set({ myList }),
			storage.set({ continueWatching }),
			storage.set({ trendingNow }),
		]);
	};

	$: hideSectionCheckboxes(hideHeaderVideo, myList, continueWatching, trendingNow);
	onMount(async () => {
		const [a, b, c, d] = await Promise.all([
			storage.get('hideHeaderVideo'),
			storage.get('myList'),
			storage.get('continueWatching'),
			storage.get('trendingNow'),
		]);
		hideHeaderVideo = a;
		myList = b;
		continueWatching = c;
		trendingNow = d;
		oldValues.push(a, b, c, d);
	});
</script>

<section class="ci_check-box">
	<div class="ci_container">
		<form action="#">
			<div class="ci_check">
				<input type="checkbox" id="hide1" bind:checked={hideHeaderVideo} />
				<label for="hide1">Header Video</label>
			</div>
			<div class="ci_check">
				<input type="checkbox" id="hide2" bind:checked={myList} />
				<label for="hide2">MyList</label>
			</div>
			<div class="ci_check">
				<input type="checkbox" id="hide3" bind:checked={continueWatching} />
				<label for="hide3">Continue Watching</label>
			</div>
			<div class="ci_check">
				<input type="checkbox" id="hide4" bind:checked={trendingNow} />
				<label for="hide4">Trending Now</label>
			</div>
		</form>
	</div>
</section>
