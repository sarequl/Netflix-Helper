<script>
	//import components
	import Header from './components/header.svelte';
	import HideSections from './components/hideSections.svelte';
	import Footer from './components/footer.svelte';
	import RefreshButton from './components/refresh.svelte';
	//import KyeboardShortcut from './components/KeyboardShortcut.svelte';

	//
	let isRefresh = false;
	const setIsRefresh = () => (isRefresh = !isRefresh);
	const makeIsRefresh = () => (isRefresh = true);
	const falseRefresh = () => (isRefresh = false);

	let isGlobalOff = false;
	const setIsGlobalOff = value => (isGlobalOff = value);
</script>

<main>
	<div class="ci_settings_area">
		<Header changeHandler={setIsRefresh} {setIsGlobalOff} />
		{#if isGlobalOff}
			<HideSections isRefresh={makeIsRefresh} {falseRefresh} />
		{/if}
		<RefreshButton {isRefresh} />
		<Footer />
	</div>
</main>

<style>
	main {
		max-width: 320px;
	}
	/*reload button css*/
</style>
