<script lang="ts">
	import { get } from '$lib/req_util';
	import { onMount } from 'svelte';
	import type { IProduct } from '../../interfaces/IProduct';
	import BenchmarkAttributes from '../../components/benchmarkAttributes.svelte';
	import Navbar from '../../components/navbar.svelte';
	import { ProductsStore } from '../../Store';
	import Loader from '../../components/loader.svelte';

	let fetchingProducts = true;
	let error = '';
	onMount(() => {
		get<{
			data: IProduct[];
			meta: {
				pagination: {
					start: number;
					limit: number;
					total: number;
				};
			};
		}>(`/products?pagination[limit]=250`)
			.then(({ data }) => {
				ProductsStore.set(data);
			})
			.catch(() => (error = 'Something went wrong.'))
			.finally(() => (fetchingProducts = false));
	});
</script>

{#if fetchingProducts}
	<Loader />
{:else if error}
	<h1>{error}</h1>
{:else}
	<Navbar />
	<div class="p-4 mx-auto w-max">
		<div class="w-max py-6">
			<BenchmarkAttributes />
		</div>
	</div>
{/if}
