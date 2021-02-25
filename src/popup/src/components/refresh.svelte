<script>
	export let isRefresh;

	async function reloadPage() {
		const query = {
			active: true,
			currentWindow: true,
		};
		const [currentTab] = await new Promise(r => {
			chrome.tabs.query(query, r);
		});
		if (currentTab.url.includes('netflix.com')) {
			chrome.tabs.reload(currentTab.id, null, () => console.log('Reloaded'));
		}
	}
</script>

<div class="ci_refresh_button">
	<div class="ci_container">
		<button
			disabled={!isRefresh}
			class={`ci_refresh_button ${isRefresh ? 'ci_btn_active' : 'ci_btn_deactive'}`}
			on:click={reloadPage}><i class="material-icons">refresh</i> Reload</button
		>
		<!-- <a href="#" class="ci_btn_deactive"><i class="material-icons">refresh</i> Refresh</a> -->
	</div>
</div>

<style>
	button.ci_refresh_button {
		text-align: center;
		border-radius: 6px;
		padding: 10px;
		color: #fff;
		font-weight: 500;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 45px;
	}
	button.ci_refresh_button.ci_btn_active {
		background: #5672ff;
	}
	button.ci_refresh_button i {
		padding-right: 5px;
		font-size: 20px;
	}

	/*new*/

	button.ci_btn_deactive {
		background: #c2c6d8 !important;
	}

	button.ci_refresh_button {
		height: 45px !important;
	}
</style>
