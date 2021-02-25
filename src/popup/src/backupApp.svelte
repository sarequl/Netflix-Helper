<script>
	import storage from './modules/storage';
	import { onMount } from 'svelte';

	async function main(activeExtension) {
		//set value
		await storage.set({ activeExtension });
	}
	let activeExtension;
	//
	$: main(activeExtension);
	onMount(async () => {
		const data = await storage.get('activeExtension');
		activeExtension = data;
	});
</script>

<main>
	<label>
		<input type="checkbox" bind:checked={activeExtension} />
	</label>
</main>

<style>
	/* main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	} */
	/*fglobal css*/
	.ci_settings_area {
		max-width: 36rem;
		background: #fff;
		font-size: 1.5rem;
		font-weight: 700;
		font-family: 'Roboto', sans-serif;
		margin: auto;
		box-shadow: 0 0 15px #7070702e;
		border-radius: 7px;
	}
	h1,
	p {
		margin: 0;
	}
	a {
		text-decoration: none;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	h1 {
		font-size: 1.8rem;
		font-weight: 700;
		color: #08092e;
	}
	.ci_container {
		padding: 1.6rem;
	}
	/*==============================*/
	/******** Header Area CSS *******/
	/*==============================*/
	.ci_logo {
		display: flex;
		align-items: center;
	}
	.ci_logo img {
		width: 3rem;
		height: 3rem;
		margin-right: 1rem;
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
		margin-left: 1rem;
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

	/*==============================*/
	/******** Check Box CSS *********/
	/*==============================*/
	.ci_check-box,
	.ci_header-area,
	.ci_disable,
	.ci_refresh_button {
		border-bottom: 2px solid #f2f2f5;
	}
	.ci_check-box .ci_check input[type='checkbox'] {
		width: 2rem;
		height: 2rem;
		border: 0.2rem solid #000;
	}
	.ci_check {
		display: flex;
		align-items: center;
		margin-bottom: 1.6rem;
	}
	.ci_check:nth-of-type(2) {
		margin-bottom: 0;
	}
	.ci_check label {
		margin-left: 0.8rem;
	}
	/*==============================*/
	/********button-disable CSS *****/
	/*==============================*/
	.ci_button-disable span {
		margin-right: 1rem;
	}
	.ci_button-disable {
		display: flex;
		align-items: center;
	}
	/*On-Off*/
	.ci_on-off-disable {
		position: relative;
		display: inline-block;
		width: 4rem;
		height: 1.4rem;
	}
	.ci_on-off-disable input {
		opacity: 0;
		width: 0;
		height: 0;
	}
	.ci_disable .slider {
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
	.ci_disable .slider::before {
		position: absolute;
		content: '';
		height: 1rem;
		width: 1rem;
		left: 0.2rem;
		top: 0.2rem;
		background-color: white;
		transition: 0.4s;
	}
	.ci_disable input:checked + .slider {
		background-color: #000000;
	}

	.ci_disable input:checked + .slider:before {
		transform: translateX(1.5rem);
	}

	.slider.round {
		border-radius: 3.4rem;
	}
	.slider.round:before {
		border-radius: 50%;
	}
	/*==============================*/
	/******** Bottom item CSS *******/
	/*==============================*/
	.ci_bottom-item ul li {
		margin-bottom: 1.6rem;
	}
	.ci_bottom-item ul li a {
		color: #08092e;
		display: flex;
		align-items: center;
	}
	.ci_bottom-item ul li a i {
		font-size: 2rem;
		margin-right: 1rem;
	}
	.ci_bottom-item ul li:nth-child(1) a i {
		color: #ffa127;
	}
	.ci_bottom-item ul li:nth-child(2) a i {
		color: #4b50f9;
	}
	.ci_bottom-item ul li:nth-child(3) a {
		color: #26cb3c;
	}
	.ci_bottom-item ul li:nth-of-type(3) {
		margin-bottom: 0;
	}

	.ci_refresh_button a {
		text-align: center;
		background: #5672ff;
		border-radius: 6px;
		padding: 1rem;
		color: #fff;
		font-weight: 500;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.ci_refresh_button a i {
		padding-right: 5px;
		font-size: 22px;
	}

	.ci_btn_deactive {
		background: #c2c6d8 !important;
	}
</style>
