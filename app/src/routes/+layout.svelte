<script lang="ts">
	import 'tw-elements';
	import { browserGet, get } from '$lib/req_util';
	// import '$lib/assets/syncscroll.js';
	import { onMount } from 'svelte';
	import '../app.css';
	import { AuthStore } from '../Store';
	import Loader from '../components/loader.svelte';

	let fetching = true;

	onMount(() => {
		const jwt = browserGet('token');
		if (jwt)
			get('/users/me')
				.then((user: any) => {
					AuthStore.set({ jwt, ...user });
				})
				.catch(() => {
					localStorage.removeItem('token');
				})
				.finally(() => {
					fetching = false;
				});
		else fetching = false;
	});
</script>

{#if fetching}
	<Loader />
{:else}
	<slot />
{/if}
