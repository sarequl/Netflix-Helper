<script>
	//import components
	import Header from './components/header.svelte';
	import HideSections from './components/hideSections.svelte';
	import Footer from './components/footer.svelte';
	import RefreshButton from './components/refresh.svelte';
	import KyeboardShortcut from './components/KeyboardShortcut.svelte';

	//
	let isRefresh = false;
	const setIsRefresh = () => (isRefresh = !isRefresh);
</script>

<main>
	<div class="ci_settings_area">
		<!-- Start Header Area -->
		<Header changeHandler={setIsRefresh} />
		<!-- End Header Area -->
		<!-- Start Check Box Area -->
		<HideSections changeHandler={setIsRefresh} />
		<!-- End Check Box Area -->
		<!-- Start Disable button Area -->
		<KyeboardShortcut />
		<!-- End Disable button Area -->
		<RefreshButton {isRefresh} />
		<!-- Start feedback Area -->
		<Footer />
		<!-- End feedback Area -->
	</div>
</main>

<style>
	main {
		max-width: 320px;
	}
	/*reload button css*/
</style>
