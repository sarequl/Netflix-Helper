<script>
	import storage from '../modules/storage';
	import { onMount } from 'svelte';

	async function main(activeExtension) {
		//set value
		await storage.set({ activeExtension });
	}
	let activeExtension;
	//
	$: main(activeExtension);
	//
	onMount(async () => {
		const data = await storage.get('activeExtension');
		activeExtension = data;
	});
	//logo
	let logo = 'icon128.png';

	//refresh function
	export let changeHandler;
</script>

<header class="ci_header-area">
	<div class="ci_container">
		<div class="ci_header-top">
			<div class="ci_logo">
				<img src={logo} alt="logo" />
				<h1>Netflix Helper</h1>
			</div>
			<!-- button -->
			<div class="ci_button">
				<label class="ci_on-off">
					<input type="checkbox" bind:checked={activeExtension} on:change={changeHandler} />
					<span class="slider round" />
				</label>
				<p>On / Off</p>
			</div>
		</div>
	</div>
</header>

<style>
	.ci_logo {
		display: flex;
		align-items: center;
	}
	.ci_logo img {
		width: 3rem;
		height: 3rem;
		margin-right: 1rem;
	}

	h1 {
		font-size: 20px;
		font-weight: 700;
		color: #08092e;
	}
	.ci_header-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.ci_button {
		display: flex;
		align-items: center;
	}
	.ci_button p {
		font-weight: 600;
		margin-left: 15px;
		font-family: 'Roboto', sans-serif;
		color: #08092e;
	}
	.ci_on-off {
		position: relative;
		display: inline-block;
		width: 4rem;
		height: 2.4rem;
	}
	.ci_on-off input {
		opacity: 0;
		width: 0;
		height: 0;
	}
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 1.8rem;
		width: 1.8rem;
		left: 0.3rem;
		bottom: 0.3rem;
		background-color: white;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #728aff;
	}

	input:checked + .slider:before {
		transform: translateX(1.5rem);
	}

	.slider.round {
		border-radius: 3.4rem;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
