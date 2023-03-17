<script lang="ts">
	import type { IProduct } from '../../interfaces/IProduct';
	import Accordion from '../accordion.svelte';
	import Description from './attributes/description.svelte';
	import Media from './attributes/media.svelte';

	export let products: IProduct[];
</script>

<Accordion target="Chassis">
	<Description descriptions={products.map((product) => product.attributes?.feature?.chassis?.description)} />
	<Media productsMedias={products.map((product) => product.attributes?.feature?.chassis?.media?.data)} />
</Accordion>
