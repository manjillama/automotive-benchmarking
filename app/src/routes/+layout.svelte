<script lang="ts">
	import 'tw-elements';
	import { browserGet, get } from '$lib/req_util';
	import { onMount } from 'svelte';
	import '../app.css';
	import { AuthStore } from '../Store';

	let fetching = true;

	onMount(() => {
		const jwt = browserGet('token');
		if (jwt)
			get('http://localhost:1337/api/users/me')
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
	<h1>Loading</h1>
{:else}
	<slot />
{/if}
