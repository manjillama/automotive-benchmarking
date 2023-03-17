<script lang="ts">
	import type { IProduct } from '../../interfaces/IProduct';
	import Accordion from '../accordion.svelte';

	export let products: IProduct[];
</script>

<Accordion target="CAD"
	><div class="flex no-wrap py-2">
		<div style="width:252px" class="ml-12 shrink-0 font-semibold" />
		{#each products as product}
			<div style="width:450px" class="shrink-0 px-2">
				<a
					href={product.attributes?.cad?.data?.attributes.url}
					class="text-white {product.attributes?.cad?.data?.attributes.url
						? 'bg-primary'
						: 'bg-secondary'} px-4 py-2 text-sm"
				>
					{#if product.attributes?.cad?.data?.attributes.url}
						Download CAD
					{:else}
						CAD not available
					{/if}
				</a>
			</div>
		{/each}
	</div></Accordion
>
